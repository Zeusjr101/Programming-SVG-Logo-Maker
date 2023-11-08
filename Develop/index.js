const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle } = require('./lib/shapes');
const svgGenerator = require('./lib/svgGenerator');


const questions = [
    {
    type: 'input',
    name: 'letters',
    message: 'Please type in a three letter?'
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color would you like the text to be?'
    },
    {
    type: 'input',
    name:'shape-color',
    message: 'what color would you like the shape to be?'
    },
    {
     type: 'checkbox',
     name:'shape',
     message: 'Pick a shape please?',
     choices: ['Square', 'Circle', 'Triangle',]
    },
];
function writeToFile(fileName, Data) {
    fs.writeFile(fileName, Data, (err) => {
        if(err) {
            console.log(err);
        } else {
         console.log ('Successfully generated log.svg');
        }
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const svgContent = svgGenerator(answers);
        writeToFile('logo.svg', svgContent); 
    });
}
  
  init();