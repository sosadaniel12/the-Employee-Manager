//Get all the requires from the other files
const Employee = require("./employee");
const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");

//use the inquirer npm to get generate the question in the command line
inquirer
  .prompt([
    {
      type: "input",
      message: "What are the employess name?",
      name: "nameOfEmployees",
    },
  ])
  .then((data) => {});
//Grab answers and use a promise to run it through
//Use the employee
