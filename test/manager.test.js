const Manager = require("../lib/manager");

test("checks to see if the office number is an actual integer", () => {
  //Arrange
  const obj = new Manager("Sosa", 50, "danielsosa2121@gmail.com", 12);

  //Assert
  expect(obj.officeNumber).toBe(12);
});

test("getRole()", () => {
  const obj = new Manager("Sosa", 50, "danielsosa2121@gmail.com", 12);

  const results = obj.getRole("Manager");

  expect(results).toBe("Manager");
});
