// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questionsString = `Project Title,Description,Table of Contents,Installation,Usage,Credits,License`;
const questionsString = `Project Title,Description,Table of Contents,Installation,Usage,Contributors,License,Tests,Questions`
const questionsArr = questionsString.split(',');
const [rmTitle, rmDesc, rmToc, rmInstall, rmUsage, rmContribute, rmLicense, rmTests, rmQuestions] = questionsArr;
console.log(rmDesc);
const outputFileAnswers = 'test.md';

// TODO: Create a function to write README file
function writeToFile(fileName, {title, description, toc, installation, usage, credits, license, tests, questions}) {
    let readmeTemplate = 
    `# ${title}\n## ${rmDesc}\n ${description}\n## ${rmToc}\n ${toc}\n## ${rmInstall}\n ${installation}\n## ${rmUsage}\n ${usage}\n## ${rmContribute}\n ${credits}\n## ${rmLicense}\n ${license}\n## ${rmTests}\n${tests}\n## ${rmQuestions}\n${questions}`;
    
    fs.writeFile(fileName, readmeTemplate, (error, data) => {
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
                type: 'input',
                name: 'license',
                message: `${rmLicense}`
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
