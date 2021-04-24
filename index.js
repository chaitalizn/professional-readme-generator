// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./src/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: "What's the project title?",
                //validate property check
                validate: (value)=> {
                    if (value) {
                        return true;
                      } else {
                        console.log('Please enter the project title!');
                        return false;
                      }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: "Enter project description!",
                //validate property check
                validate: (value)=> {
                    if (value) {
                        return true;
                      } else {
                        console.log('Please enter project description!');
                        return false;
                      }
                }
            },
            {
                type: 'input',
                name: 'contribution guidelines',
                message: "Enter contribution guidelines for the project",
                //validate property check
                validate: (value)=> {
                    if (value) {
                        return true;
                      } else {
                        console.log('Please enter contribution guidelines for the project!');
                        return false;
                      }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: "Enter project usage information",
                //validate property check
                validate: (value)=> {
                    if (value) {
                        return true;
                      } else {
                        console.log('Please enter project usage information!');
                        return false;
                      }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: "Enter project installation proccess",
                //validate property check
                validate: (value)=> {
                    if (value) {
                        return true;
                      } else {
                        console.log('Please enter project installation process!');
                        return false;
                      }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: "Enter project test instructions!",
                //validate property check
                validate: (value)=> {
                    if (value) {
                        return true;
                      } else {
                        console.log('Please enter project test instructions!');
                        return false;
                      }
                }
            },
            {
                type: 'list',
                name: 'test',
                message: "Enter type of licence used!",
                choices:['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
                //validate property check
                validate: (value)=> {
                    if (value) {
                        return true;
                      } else {
                        console.log('Please choose a license type!');
                        return false;
                      }
                }
            },
            {
                type: 'input',
                name: 'Github username',
                message: "Enter Github username!",
                //validate property check
                validate: (value)=> {
                    if (value) {
                        return true;
                      } else {
                        console.log('Please your Github username!');
                        return false;
                      }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter your email address!",
                //validate property check
                validate: (value)=> {
                    if (value) {
                        return true;
                      } else {
                        console.log('Please your email address!');
                        return false;
                      }
                }
            },

        ]
    )
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
