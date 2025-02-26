const { JSDOM } = require("jsdom");

function normalizeURL(urlString) {
  const hostname = new URL(urlString).hostname;
  const pathname = new URL(urlString).pathname;

  const url = `${hostname}${pathname}`;

  if (url.length > 0 && url.endsWith("/")) {
    return url.slice(0, -1);
  }

  return url;
}

function getURLsFromHTML(htmlBody, baseURL) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const tags = dom.window.document.querySelectorAll("a");

  for (const tag of tags) {
    if (tag.href.slice(0, 1) === "/") {
      try {
        const stringObj = new URL(`${baseURL}${tag.href}`);
        urls.push(normalizeURL(stringObj.href));
      } catch (err) {
        console.error("error with relative url: " + err);
      }
    } else {
      try {
        const stringObj = new URL(tag.href);
        urls.push(normalizeURL(stringObj.href));
      } catch (err) {
        console.error("error with absolute url: " + err);
      }
    }
  }

  return urls;
}
module.exports = {
  normalizeURL,
  getURLsFromHTML,
};
