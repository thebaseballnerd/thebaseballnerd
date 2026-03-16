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
    'substack.com'
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

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const req = lib.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TheBaseballNerd/1.0)',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*'
      }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) return resolve(fetchUrl(res.headers.location));
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(8000, () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

function parseRSS(xml) {
  const items = [];
  const matches = xml.match(/<item[\s\S]*?<\/item>/g) || [];
  matches.slice(0, 20).forEach(item => {
    const title   = strip(extract(item, 'title'));
    const link    = strip(extract(item, 'link') || extract(item, 'guid'));
    const pubDate = strip(extract(item, 'pubDate'));
    const desc    = strip(extract(item, 'description'));
    if (title && link) items.push({ title, link, pubDate, description: desc });
  });
  return items;
}

function extract(str, tag) {
  const m = str.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
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
