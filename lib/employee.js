//Create the employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //Create the getName() method for the employee class
  getName() {
    return this.name;
  }
  //Create the getId() method for the employee class
  getId() {
    return this.id;
  }
  //Create the getEmail() method for the employee class
  getEmail() {
    return this.email;
  }
  //Create the getRole() method for the employee class
  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
