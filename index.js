const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require("./lib/shapes");


questions = [
    {
    type: 'input',
    name: 'text',
    message: 'Please enter up to 3 characters.',
    validate: (input) => {
      if (input.length <= 3){
        return true;
      }else {
        return "Please enter no more than 3 characters"
      }
    }

},
{
    type: 'input',
    name: 'textcolor',
    message: 'Please enter the color for your text by name or hexadecimal number starting with "#".', 
    
     },
  {
    type: 'list',
    message: 'Please select the shape of your logo.',
    name: 'shape',
    choices: ['Triangle', 'Square', 'Circle'],
  },
  {
    type: 'input',
    name: 'color',
    message: 'Please enter your background color by name or hexadecimal number starting with "#".',
    
     },
     
]



let shape;

let shapeText= "";

function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
     switch (answers.shape) {
         case "Triangle": 
            shape = new Triangle();            
            shape.setColor(answers.color);
            shapeText= shape.render();
    
         break;
            case "Square":
                shape = new Square();
                shape.setColor(answers.color);
                shapeText= shape.render();
               
            break;
            case "Circle":
                shape = new Circle();
                shape.setColor(answers.color);
                shapeText= shape.render();
               
            break;
     } 
     let svgTop = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeText}

<text x="150" y="170" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>

</svg>

`
    return writeToFile("logo.svg", svgTop)
 
        });
      };
  

 function writeToFile(fileName, data) {
    
    
   fs.writeFile(fileName, data, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('Success!')
    });
  };
 




init();