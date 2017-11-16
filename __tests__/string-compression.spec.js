const stringCompression = require("../lib/string-compression.js");

describe("stringCompression", () => {
  describe("when string is aaabbbccc", () => {
    it("should return a3b3c3", () => {
      const result = stringCompression("aaabbbccc");
      expect(result).toEqual("a3b3c3");
    });
  });

  describe("when string is ghjff", () => {
    it("should return g1h1j2f2", () => {
      const result = stringCompression("ghjff");
      expect(result).toEqual("g1h1j1f2");
    });
  });

  describe("when string is aabccabbc", () => {
    it("should return a2b1c2a1b2c1", () => {
      const result = stringCompression("aabccabbc");
      expect(result).toEqual("a2b1c2a1b2c1");
    });
  });

  describe("when string is aab cca bbc", () => {
    it("should return a2b1c2a1b2c1", () => {
      const result = stringCompression(` aabc cab 
      bc `);
      expect(result).toEqual("a2b1c2a1b2c1");
    });
  });

  describe("when string is null", () => {
    it("should return error", () => {
      expect(() => stringCompression(null)).toThrow();
    });
  });

  describe("when string is empty", () => {
    it("should return error", () => {
      expect(() => stringCompression("")).toThrow();
    });
  });

  describe("when input is not a string", () => {
    it("should return error", () => {
      expect(() => stringCompression(9)).toThrow();
    });
  });
});
