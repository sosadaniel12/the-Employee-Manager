//Get all the requires from the other files
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");
const { validate } = require("@babel/types");
const { number } = require("yargs");

const allTeam = [];
//use the inquirer npm to get generate the question in the command line
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of the Manager",
      name: "name",
      validate: (name) => {
        if (name) {
          return name;
        } else {
          return "Please enter a name!";
        }
      },
    },
    {
      type: "input",
      message: "Enter the Manager ID",
      name: "id",
      validate: (id) => {
        if (id) {
          return id;
        } else {
          return "Enter the ID!";
        }
      },
    },
    {
      type: "input",
      message: "Enter the Manager E-mail",
      name: "email",
      validate: (email) => {
        if (email) {
          return email;
        } else {
          return "Enter a email!";
        }
      },
    },
    {
      type: "input",
      message: "Enter the office number of the Manager",
      name: "officeNumber",
      validate: (number) => {
        if (isNaN(number)) {
          return number;
        } else {
          return "Enter the office number!";
        }
      },
    },
  ])
  .then((managerInfo) => {
    //The data is going to equal what the user types in
    const { name, id, email, officeNumber } = managerInfo;
    //Construct an employee object for each name
  });

//Grab answers and use a promise to run it through
