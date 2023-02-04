const Manager = require("./lib/Manager"); 
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "sample.html");

const render = require("./dist/htmlRenderedOutput");

const createdTeam = [];
function createOutPut() {
    //create manager function
    const createManager = function () {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the name of the manager for this project?",
                    name: "managerName"
                },
                {
                    type: "input",
                    message: "What is the id # for the manager for this project?",
                    name: "managerId"
                },
                {
                    type: "input",
                    message: "What is the manager's email for this project?",
                    name: "managerEmail"
                },
                {
                    type: "input",
                    message: "What is the manager's office number for this project?",
                    name: "managerOfficeNumber"
                },
            ])
            .then(answers => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
                createdTeam.push(manager)
                createTeam();
            })
    }
    