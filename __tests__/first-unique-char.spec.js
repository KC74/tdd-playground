const firstUniqueChar = require("../lib/first-unique-char.js");

describe("firstUniqueChar", () => {
  describe("when string is dddeeefggghhh", () => {
    it("should return f", () => {
      const result = firstUniqueChar("dddeeefggghhh");
      expect(result).toEqual("f");
    });
  });
  describe("when string is 'terfg'", () => {
    it("should return t", () => {
      const result = firstUniqueChar("'terfg'");
      expect(result).toEqual("t");
    });
  });
  describe("when string is frof", () => {
    it("should return r", () => {
      const result = firstUniqueChar("frof");
      expect(result).toEqual("r");
    });
  });
  describe("when string is ttttt", () => {
    it("should return undefined", () => {
      const result = firstUniqueChar("ttttt");
      expect(result).toEqual(undefined);
    });
  });
});
