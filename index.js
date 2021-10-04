//Get all the requires from the other files
const Employee = require("./lib/employee");
const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");

//use the inquirer npm to get generate the question in the command line
inquirer
  .prompt([
    {
      type: "list",
      message: "What role is the employee?",
      choices: "Manager, Intern, Engineer",
      name: "roleEmployees",
    },
  ])
  .then((data) => {
    //The data is going to equal what the user types in
    //Construct an employee object for each name
  });

//Grab answers and use a promise to run it through
//Use the employee
