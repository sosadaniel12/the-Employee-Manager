class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName(employeeName) {
    this.name = employeeName;
  }
  getId() {}
  getEmail() {}
  getRole() {}
}

module.exports = Employee;
