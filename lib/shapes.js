    // main shape constructor
    class Shape {
      constructor(){
        this.color = "";
      }
      setColor(color) {
        this.color = color;
      }

    };

// adds information for different shape structures
    class Triangle extends Shape {
      render() {
    
        return `<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
      }

    }
    class Square extends Shape {
      render() {
        return `<rect x="68" y="50" width="160" height="160" fill="${this.color}"/>`;
      }

    }
    class Circle extends Shape {
      render() {
        return `<circle cx="150" cy="135" r="65" fill="${this.color}"/>`;
      }

    }


  module.exports = { Triangle, Square, Circle };
  