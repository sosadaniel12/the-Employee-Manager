//Get all the requires from the other files
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/generateEmployeesHTML");

const allTeam = [];
//use the inquirer npm to get generate the question in the command line
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the Manager",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the Manager ID",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the Manager E-mail",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the office number of the Manager",
        name: "officeNumber",
      },
    ])
    .then((managerInfo) => {
      //The data is going to equal what the user types in
      const { name, id, email, officeNumber } = managerInfo;
      //Construct an employee object for each name
      const manager = new Manager(name, id, email, officeNumber);
      allTeam.push(manager);
    })
    .catch((error) => {
      if (error) {
        return "Error";
      }
    });
};
const addEmployee = () => {
  console.log("Employee Added!");
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Please select one of the roles",
        choices: ["Engineer", "Intern"],
        name: "role",
      },
      {
        type: "input",
        message: "What is the name of the employee?",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the employee email",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter employee GitHub username",
        name: "gitHub",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        message: "Please enter the intern school name",
        when: (input) => input.role === "Intern",
        name: "school",
      },
      {
        type: "confirm",
        name: "addAnotherEmployee",
        message: "Would you like to add another employee?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, addAnotherEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }
      allTeam.push(employee);

      if (addAnotherEmployee) {
        return addEmployee(allTeam);
      } else {
        return allTeam;
      }
    });
};

// function to generate HTML page file using file system
const writeFile = (data) => {
  fs.writeFile("./index.html", data, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the profile has been created
    } else {
      console.log(
        "Your team profile has been successfully created! Please check out the index.html"
      );
    }
  });
};

addManager()
  .then(addEmployee)
  .then((allTeam) => {
    return generateHTML(allTeam);
  })
  .then((pageFile) => {
    return writeFile(pageFile);
  })
  .catch((err) => {
    console.log(err);
  });
