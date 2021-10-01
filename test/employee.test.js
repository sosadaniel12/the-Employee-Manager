const { it } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../js/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should take in a parameter and return the name of the employee", () => {
      //Arrange
      const obj = new Employee();
      const employeeName = "Daniel";
    });
  });
});
