const stringCompression = require("../lib/string-compression.js");

describe("stringCompression", () => {
  describe("when string is aaabbbccc should return a3b3c3", () => {
    it("should return a3b3c3", () => {
      const result = stringCompression("aaabbbccc");
      expect(result).toEqual("a3b3c3");
    });
  });

  describe("when string is ghjffg should return g1h1j2f2", () => {
    it("should return g1h1j2f2", () => {
      const result = stringCompression("ghjff");
      expect(result).toEqual("g1h1j1f2");
    });
  });
});
