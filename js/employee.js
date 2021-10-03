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
    if (employeeName) {
      return this.name;
    } else {
      return new Error("Employee name not passed into getName()");
    }
  }
  //Create the getId() method for the employee class
  getId(employeeId) {
    if (employeeId) {
      return this.email;
    } else {
      return new Error("The employee Id was not passed into getId()");
    }
  }
  //Create the getEmail() method for the employee class
  getEmail(employeeEmail) {
    if (employeeEmail) {
      return this.email;
    } else {
      return new Error("The employee email was not passed into the getEmail()");
    }
  }
  //Create the getRole() method for the employee class
  getRole(employeeRole) {
    if (employeeRole) {
      return this.role;
    } else {
      return new Error("The employee role was not passed into the getRole()");
    }
  }
}

module.exports = Employee;
