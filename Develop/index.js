// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?'
    },    {
        type: 'input',
        name: 'github',
        message: 'For questions (github)?'
    },    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val) {
            return val.toLowerCase()
        }
    },
];


inquirer.prompt (questions)
.then(answers =>{
    writeToFile("Output", generateMarkdown(answers));
})
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('README file created and data written successfully.');
    });
  }
