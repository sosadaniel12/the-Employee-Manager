const Intern = require("../lib/intern");

test("checks the to see if the return is a string for school", () => {
  const obj = new Intern("Daniel", 30, "danielsosa2121@gmail.com", "UTSA");

  expect(obj.school).toMatch("UTSA");
});

test("getSchool()", () => {
  const obj = new Intern("Daniel", 30, "danielsosa2121@gmail.com", "UTSA");
  const result = obj.getSchool("UTSA");
  expect(result).toMatch("UTSA");
});

test("getRole", () => {
  const obj = new Intern("daniel", 30, "danielsosa2121@gmail.com", "UTSA");
  const result = obj.getRole("Intern");
  expect(result).toMatch("Intern");
});
