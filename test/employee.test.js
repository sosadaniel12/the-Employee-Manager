const { describe, it, expect } = require("@jest/globals");
const exp = require("constants");
const Employee = require("../js/employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should take in a string and return the name of the employee", () => {
      //Arrange
      const obj = new Employee("Daniel", 505, "danielsosa2121@gmail.com");
      const employeeName = "Daniel";
      const expectedName = "Daniel";

      //Act
      const result = obj.getName(employeeName);

      //Assert
      expect(result).toBe(expectedName);
    });
  });

  describe("getId", () => {
    it("should take in a number and return the id of the employee ", () => {
      //Arrange
      const obj = new Employee("Daniel", 505, "danielsosa2121@gmail.com");
      const employeeId = 505;
      const expectedId = 505;

      //Act
      const results = obj.getId(employeeId);

      //Assert
      expect(results).toEqual(expectedId);
    });
  });

  describe("getEmail", () => {
    it("should take in a string and return an email of the employee", () => {
      //Arrange
      const obj = new Employee("Daniel", 505, "danielsosa2121@gmail.com");
      const employeeEmail = "danielsosa2121@gmail.com";
      const expectedEmail = "danielsosa2121@gmail.com";

      //Act
      const results = obj.getEmail(employeeEmail);

      //Assert
      expect(results).toBe(expectedEmail);
    });
  });

  describe("getRole", () => {
    it("should return the string of the role employee", () => {
      //Arrange
      const obj = new Employee("Daniel", 505, "danielsosa2121@gmail.com");
      const role = "Employee";
      const expectRole = "Employee";

      //Act
      const result = obj.getRole(role);

      //Assert
      expect(result).toBe(expectRole);
    });
  });
});
