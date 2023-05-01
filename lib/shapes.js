    class Shape {
      constructor(){
        console.log("construct log")
        this.color = "";
      }
      setColor(color) {
        this.color = color;
      }

    };


    class Triangle extends Shape {
      render() {
    
        return ` 
        <polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.color}" />
       `;
      }

    }
    class Square extends Shape {
      render() {
        return `
        <rect  width="160" height="160" fill="${answers.color}" />
        <text x="80" y="100" font-size="70" text-anchor="middle">${answers.text}</text>
    </svg>`;
      }

    }
    class Circle extends Shape {
      render() {
        return `  
     <circle cx="100" cy="70" r="65" fill="${answers.color}"/>
     <text x="100" y="90" font-size="60" text-anchor="middle">${answers.text}</text>
   </svg> `;
      }

    }


  module.exports = { Triangle, Square, Circle };
  