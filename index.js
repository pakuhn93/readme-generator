// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questionsStr = `Project Title,Description,Table of Contents,Installation,Usage,Credits,License,Tests,Questions`;
const questionsStr = `Project Title,Description,Table of Contents,Installation,Usage,Contributors,License,Tests,Questions`
const questionsArr = questionsStr.split(',');
const [rmTitle, rmDesc, rmToc, rmInstall, rmUsage, rmContribute, rmLicense, rmTests, rmQuestions] = questionsArr;
const licensesStr = `1,2,3,4,5`;
const licensesArr = licensesStr.split(',');
const tableOfContents = ``
console.log(rmDesc);
const outputFileAnswers = 'README.md';

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    let readme = md.generateReadme(questionsArr, answers);
    
    fs.writeFile(fileName, readme, (error, data) => {
         error ? console.log(error) : console.log(data);
    });
}

// TODO: Create a function to initialize app
function init(){
    inquirer   
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: `${rmTitle}`
            },
            {
                type: 'input',
                name: 'description',
                message: `${rmDesc}`
            },
            {
                type: 'input',
                name: 'toc',
                message: `${rmToc}`
            },
            {
                type: 'input',
                name: 'installation',
                message: `${rmInstall}`
            },
            {
                type: 'input',
                name: 'usage',
                message: `${rmUsage}`
            },
            {
                type: 'input',
                name: 'credits',
                message: `${rmContribute}`
            },
            {
                type: 'list',
                name: 'license',
                message: `${rmLicense}`,
                choices: licensesArr
            },
            {
                type: 'input',
                name: 'tests',
                message: `${rmTests}`
            },
            {
                type: 'input',
                name: 'questions',
                message: `${rmQuestions}`
            }
        ])
        .then((answers) => {
            console.log(answers);
            writeToFile(outputFileAnswers, answers);
        });
    
}

// Function call to initialize app
init();
