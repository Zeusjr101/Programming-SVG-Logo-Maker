const fs = require('fs');
const inquirer = require('inquirer');
const {circles, square, triangle, rectangle } = require('./lib/shapes');
const svgGenerator = require('./lib/svgGenerator');

// class svgGenerator {
//     constructor() {
//         this.letters = [];
//         this.color = [];
//         this.shape = [];
//     }
// }

const questions = [
    {
    type: 'input',
    name: 'letters',
    message: 'Please type in a three letter?'
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
     choices: ['square', 'circle', 'triangle, rectangle']
    },
];
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.log(err);
        } else {
         console.log ('Generated log.svg');
        }
    });
}


function init() {
    inquirer.prompt(questions).then((answers) => {
        const fileName = 'logo.svg';
        writeToFile(fileName, data); 
        
    });
}

init();