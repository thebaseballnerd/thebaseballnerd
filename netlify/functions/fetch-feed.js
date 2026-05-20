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

function fetchUrl(url, redirectCount = 0) {
  if (redirectCount > 5) return Promise.reject(new Error('Too many redirects'));
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const parsed = new URL(url);
    const options = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'identity',
        'Referer': `https://${parsed.hostname}/`,
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      }
    };
    const req = lib.request(options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        const location = res.headers.location;
        if (!location) return reject(new Error('Redirect with no location'));
        const next = location.startsWith('http') ? location : `https://${parsed.hostname}${location}`;
        return resolve(fetchUrl(next, redirectCount + 1));
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('Timeout')); });
    req.end();
  });
}

function parseRSS(xml) {
  const items = [];
  const matches = xml.match(/<item[\s\S]*?<\/item>/g) || [];
  matches.slice(0, 20).forEach(item => {
    const title   = strip(extract(item, 'title'));
    const link    = strip(extractLink(item) || extract(item, 'guid'));
    const pubDate = strip(extract(item, 'pubDate'));
    const desc    = strip(extract(item, 'description'));
    if (title && link) items.push({ title, link, pubDate, description: desc });
  });
  return items;
}

function extract(str, tag) {
  // Try standard open/close tag first
  const m = str.match(new RegExp(`<${tag}[^>]*>([\s\S]*?)<\/${tag}>`, 'i'));
  if (m && m[1].trim()) return m[1];
  // Fallback: self-closing or atom namespace variants
  return '';
}

function extractLink(str) {
  // Handle ESPN CDATA links: <link><![CDATA[url]]></link>
  const cdataMatch = str.match(/<link[^>]*>\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*<\/link>/i);
  if (cdataMatch && cdataMatch[1].trim()) return cdataMatch[1].trim();
  // Standard link tag
  const stdMatch = str.match(/<link[^>]*>(https?:\/\/[^\s<]+)<\/link>/i);
  if (stdMatch) return stdMatch[1].trim();
  // guid as fallback
  const guidMatch = str.match(/<guid[^>]*>(https?:\/\/[^\s<]+)<\/guid>/i);
  if (guidMatch) return guidMatch[1].trim();
  return '';
}

function strip(str) {
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    .trim();
}
