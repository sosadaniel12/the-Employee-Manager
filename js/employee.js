//Create the employee class
class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
  //Create the getName() method for the employee class
  getName(employeeName) {
    this.name = employeeName;
  }
  //Create the getId() method for the employee class
  getId(employeeId) {
    this.id = employeeId;
  }
  //Create the getEmail() method for the employee class
  getEmail(employeeEmail) {
    this.email = employeeEmail;
  }
  //Create the getRole() method for the employee class
  getRole(employeeRole) {
    this.role = employeeRole;
  }
}

module.exports = Employee;
