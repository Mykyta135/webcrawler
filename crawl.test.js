const {normalizeURL} = require("./crawl")
const {test, expect} = require("@jest/globals")

test("normalizeURL", () => {
    const input1 = "https://boot.dev";
    const input2 = "https://Boot.dev";
    const input3 = "http://boot.dev";
    
    const actual1 = normalizeURL(input1);
    const actual2 = normalizeURL(input2);
    const actual3 = normalizeURL(input3);
    const expected = "boot.dev";

    expect(actual1).toEqual(expected);
    expect(actual2).toEqual(expected);
    expect(actual3).toEqual(expected);

})
test('normalizeURLwithPath', () => {
    const input1 = "http://api.bOot.dev/1";
    const input2 = "http://api.boot.dev/1";
    const input3 = "https://api.boot.dev/1/";

    const actual1 = normalizeURL(input1);
    const actual2 = normalizeURL(input2);
    const actual3 = normalizeURL(input3);
    const expected = "api.boot.dev/1";
    expect(actual1).toEqual(expected);
    expect(actual2).toEqual(expected);
    expect(actual3).toEqual(expected);

})