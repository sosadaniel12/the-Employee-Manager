//Import the Employee Class from the employee file
const Employee = require("./employee");
//Make a subclass from the Employer class
class Engineer extends Employee {
  //The constructor means making the methods for the subclass
  // constructor()
  constructor(name, id, email, github) {
    //super is the methods you want to be able to use from the parent class
    super(name, id, email);
    this.github = github;
  }
  //the getGitHub() will return the username of the github account
  getGitHub() {
    return this.github;
  }
  //the getRole() will return the role of Engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
