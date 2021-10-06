// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'projectname',
    },
    {
        type: 'input',
        message: 'Please write a description of your project: ',
        name: 'description',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0','BDS 3','None']
    },
    {
        type: 'input',
        message: 'What command should be run to imstall dependencies?',
        name: 'nmpcommand',
        default: "npm i"
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testcommand',
        default: "npm test"
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'repoinfo'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'repocontribute'
    }
];

// TODO: Create a function to write README file
function writeToFile(projectdir,filename, data) {
    if (!fs.existsSync('./output')) {
        fs.mkdirSync('./output');
    }
    if (!fs.existsSync(`./output/${projectdir}`)) {
        fs.mkdirSync(`./output/${projectdir}`);
    }
    console.log(`./output/${projectdir}/${filename}`);
    fs.appendFile(`./output/${projectdir}/${filename}`, JSON.stringify(data), (err) =>
        err ? console.error(err) : console.log('README file created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile(response.projectname,"README.md",response)
        );
}

// Function call to initialize app
init();
