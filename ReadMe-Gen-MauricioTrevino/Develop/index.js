// Require the inquirer and fs packages
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
    },
    {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project:'
    },
    {
    type: 'checkbox',
    name: 'tableOfContents',
    message: 'Select the table of contents for your README:',
    choices: [
    'Installation',
    'Usage',
    'Credits',
    'License'
    ],
    },
    {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use:'
    },
    {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators and any third-party assets used:'
    },
    {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: [
    'Apache License 2.0',
    'GNU General Public License v3.0',
    'MIT License',
    'Mozilla Public License 2.0',
    'The Unlicense'
    ]
    },
    {
    type: 'confirm',
    name: 'badges',
    message: 'Do you want to include badges in your README?'
    },
    {
    type: 'input',
    name: 'features',
    message: 'List your project features, if any:'
    },
    {
    type: 'confirm',
    name: 'contribute',
    message: 'Do you want to include a section on how to contribute to your project?'
    },
    {
    type: 'confirm',
    name: 'tests',
    message: 'Do you want to include a section on tests for your project?'
    },
    ];

// A function that writes the content to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    // If there is an error, log it
    if (err) {
      return console.log(err);
    }

    // If there is no error, log a success message
    console.log('README.md generated successfully!');
  });
}

// A function to initialize the app
function init() {
// Prompt the user with the questions
 inquirer.prompt(questions).then(function(answers) {
// Store the user's answers
const title = answers.title;
const description = answers.description;
const tableOfContents = answers.tableOfContents;
const installation = answers.installation;
const usage = answers.usage;
const credits = answers.credits;
const license = answers.license;
const badges = answers.badges;
const features = answers.features;
const contribute = answers.contribute;
const tests = answers.tests;


// Generate the content for the README
let content = `# ${title}\n\n`;
content += `## Description\n\n${description}\n\n`;
content += `## Table of Contents\n\n${tableOfContents}\n\n`;
content += `## Installation\n\n${installation}\n\n`;
content += `## Usage\n\n${usage}\n\n`;
content += `## Credits\n\n${credits}\n\n`;
content += `## License\n\n${license}\n\n`;
content += `## Badges\n\n${badges}\n\n`;
content += `## Features\n\n${features}\n\n`;
content += `## How to Contribute\n\n${contribute}\n\n`;
content += `## Tests\n\n${tests}\n\n`;

// Write the content to the README file
writeToFile('README.md', content);
  });
}

// Call the init function to start the app
init();
