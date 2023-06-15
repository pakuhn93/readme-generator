// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questionsString = `Project Title, Description, Table of Contents, Installation, Usage, Credits, License`;
const questions = questionsString.split(',');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init(){
    inquirer   
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: `${questions[0]}`
            },
            {
                type: 'input',
                name: 'description',
                message: `${questions[1]}`
            },
            {
                type: 'input',
                name: 'contents',
                message: `${questions[2]}`
            },
            {
                type: 'input',
                name: 'installation',
                message: `${questions[3]}`
            },
            {
                type: 'input',
                name: 'usage',
                message: `${questions[4]}`
            },
            {
                type: 'input',
                name: 'credits',
                message: `${questions[5]}`
            },
            {
                type: 'input',
                name: 'license',
                message: `${questions[6]}`
            }
        ])
        .then((answers) => {

        });
    
}

// Function call to initialize app
init();
