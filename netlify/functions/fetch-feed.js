const https = require('https');
const http  = require('http');

exports.handler = async function(event) {
  const feedUrl = event.queryStringParameters && event.queryStringParameters.url;
  if (!feedUrl) {
    return { statusCode: 400, body: JSON.stringify({ error: 'No feed URL provided' }) };
  }

  const allowed = [
    'mlbtraderumors.com',
    'fangraphs.com',
    'espn.com',
    'baseball-reference.com',
    'baseballamerica.com',
    'baseballprospectus.com',
    'substack.com',
    'api.substack.com'
  ];
  if (!allowed.some(d => feedUrl.includes(d))) {
    return { statusCode: 403, body: JSON.stringify({ error: 'Domain not allowed' }) };
  }

  try {
    const xml   = await fetchUrl(feedUrl);
    const items = parseRSS(xml);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=300'
      },
      body: JSON.stringify({ status: 'ok', items })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ status: 'error', message: err.message }) };
  }
};

function fetchUrl(url, redirectCount) {
  redirectCount = redirectCount || 0;
  if (redirectCount > 5) return Promise.reject(new Error('Too many redirects'));

  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const reqOptions = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'identity',
        'Cache-Control': 'no-cache'
      }
    };

    lib.get(url, reqOptions, function(res) {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        var location = res.headers.location;
        res.resume(); // drain response
        if (!location) return reject(new Error('Redirect with no location'));
        if (!location.startsWith('http')) {
          var parsed = new URL(url);
          location = parsed.protocol + '//' + parsed.hostname + location;
        }
        return fetchUrl(location, redirectCount + 1).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error('HTTP ' + res.statusCode));
      }
      res.setEncoding('utf8');
      var data = '';
      res.on('data', function(chunk) { data += chunk; });
      res.on('end', function() { resolve(data); });
    }).on('error', reject).setTimeout(10000, function() {
      this.destroy();
      reject(new Error('Timeout'));
    });
  });
}

function parseRSS(xml) {
  var items = [];
  var matches = xml.match(/<item[\s\S]*?<\/item>/g) || [];
  matches.slice(0, 20).forEach(function(item) {
    var title   = strip(extract(item, 'title'));
    var link    = strip(extractLink(item) || extract(item, 'guid'));
    var pubDate = strip(extract(item, 'pubDate'));
    var desc    = strip(extract(item, 'description'));
    // Self-closing enclosure tag
    var enclosureMatch = item.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
    var enclosure = enclosureMatch ? enclosureMatch[1] : '';
    // itunes:duration
    var durationMatch = item.match(/<itunes:duration[^>]*>([\s\S]*?)<\/itunes:duration>/i);
    var duration = durationMatch ? strip(durationMatch[1]) : '';
    if (title && link) items.push({ title: title, link: link, pubDate: pubDate, description: desc, enclosure: enclosure, duration: duration });
  });
  return items;
}

function extractLink(str) {
  // CDATA-wrapped link (ESPN style)
  var cdataMatch = str.match(/<link[^>]*>\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*<\/link>/i);
  if (cdataMatch && cdataMatch[1].trim()) return cdataMatch[1].trim();
  // Plain URL in link tag
  var stdMatch = str.match(/<link[^>]*>(https?:\/\/[^\s<]+)<\/link>/i);
  if (stdMatch) return stdMatch[1].trim();
  // guid fallback
  var guidMatch = str.match(/<guid[^>]*>(https?:\/\/[^\s<]+)<\/guid>/i);
  if (guidMatch) return guidMatch[1].trim();
  return '';
}

function extract(str, tag) {
  var m = str.match(new RegExp('<' + tag + '[^>]*>([\\s\\S]*?)<\\/' + tag + '>', 'i'));
  return m ? m[1] : '';
}

function strip(str) {
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    .trim();
}
