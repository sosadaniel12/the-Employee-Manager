const Engineer = require("../js/engineer");

describe("Engineer", () => {
  //gets the enigeeners github username
  describe("getGitHub", () => {
    it("should take in a string and return the github username", () => {
      //Arrange
      const obj = new Engineer(
        "Sosa",
        1,
        "danielsosa2121@gmail.com",
        "sosadaniel12"
      );
      //Act
      const result = obj.getGitHub("sosadaniel12");

      //Assert
      expect(result).toMatch("sosadaniel12");
    });
  });
  describe("getRole()", () => {
    it("should return the role of Engineer", () => {
      //Arrange
      const obj = new Engineer(
        "Sosa",
        1,
        "danielsosa2121@gmail.com",
        "sosadaniel12"
      );
      //Act
      const result = obj.getRole("Engineer");
      //Assert
      expect(result).toMatch("Engineer");
    });
  });
});
