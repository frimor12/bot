"use strict";

const { describe, it } = require("mocha");
const { expect } = require("chai");
const { parseUrl } = require("../src/url");

describe("parseUrl", function() {
    it("it should throw an error when passing more than one argument", function() {
        expect(() => parseUrl("ebay.com", "?id=123")).to.throw(Error);
        expect(() => parseUrl("ebay.com")).to.not.throw();
    });

    it("should return an object", function() {
        expect(parseUrl("ebay.com")).to.be.an("object");
    });

    it("it should throw an error when passing a non-string as first argument", function() {
        expect(() => parseUrl(123)).to.throw(TypeError);
        expect(() => parseUrl("ebay.com")).to.not.throw();
    });

    it("it should return the scheme correctly", function() {
        expect(parseUrl("https://ebay.com")).to.deep.equal({ scheme: "https", domain: "ebay.com" });
    });

    it("it should return the domain correctly", function() {
        expect(parseUrl("ebay.com")).to.deep.equal({ domain: "ebay.com" });
        expect(parseUrl("ebay.com/search/motorcycle")).to.deep.equal({ domain: "ebay.com" });
    });

    it("it should return the query correctly", function() {
        expect(parseUrl("ebay.com?id=123")).to.deep.equal({ domain: "ebay.com", query: "?id=123" });
        expect(parseUrl("ebay.com/search/motorcycle?id=123")).to.deep.equal({ domain: "ebay.com", query: "?id=123" });
        expect(parseUrl("ebay.com/search/motorcycle?id=123")).to.deep.equal({ domain: "ebay.com", query: "?id=123" });
        expect(parseUrl("ebay.com/search/motorcycle?id=123&filter=lever")).to.deep.equal({ domain: "ebay.com", query: "?id=123&filter=lever" });
    });

    it("it should return the fragment correctly", function() {
        expect(parseUrl("ebay.com#blackfriday")).to.deep.equal({ domain: "ebay.com", fragment: "#blackfriday" });
        expect(parseUrl("ebay.com/search#blackfriday")).to.deep.equal({ domain: "ebay.com", fragment: "#blackfriday" });
        expect(parseUrl("ebay.com/search/motorcycle#blackfriday")).to.deep.equal({ domain: "ebay.com", fragment: "#blackfriday" });
        expect(parseUrl("ebay.com/search/motorcycle?id=123#blackfriday")).to.deep.equal({ domain: "ebay.com", fragment: "#blackfriday", query: "?id=123" });
        expect(parseUrl("ebay.com/search/motorcycle?id=123&filter=lever#blackfriday")).to.deep.equal({ domain: "ebay.com", fragment: "#blackfriday", query: "?id=123&filter=lever" });
    });
});
