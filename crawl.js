// https://boot.dev -> boot.dev
// https://Boot.dev -> boot.dev
// http://boot.dev  -> boot.dev

function normalizeURL(urlString) {
  const hostname = new URL(urlString).hostname;
  const pathname = new URL(urlString).pathname;

  const url = `${hostname}${pathname}`;

  if (url.length > 0 && url.endsWith('/')) {
    return url.slice(0, -1)
  }

  return url;
}

module.exports = {
  normalizeURL,
};
