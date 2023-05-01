const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require("./lib/shapes");


questions = [
    {
    type: 'input',
    name: 'text',
    message: 'Please enter up to 3 characters.',
    //validate: (input) => input.length <= 3,
    //return  : "Please enter no more than 3 characters"

},
{
    type: 'input',
    name: 'color',
    message: 'Please enter your color selection by name or hexadecimal number.',    
     },
  {
    type: 'list',
    message: 'Please select the shape of your logo.',
    name: 'shape',
    choices: ['Triangle', 'Square', 'Circle'],
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
            console.log(shapeText)
         break;
            case "Square":
                shape = new Square();
                shape.setColor(answers.color);
                shapeText= shape.render();
                console.log(shapeText)
            break;
            case "Circle":
                shape = new Circle();
                shape.setColor(answers.color);
                shapeText= shape.render();
                console.log(shapeText)
            break;
     } 
     let svgTop = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeText}

<text x="150" y="160" font-size="55" text-anchor="middle">${answers.text}</text>

</svg>

`
    return writeToFile("logo.svg", svgTop)
 



       
        console.log(svgTop)
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