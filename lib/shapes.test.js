
const Triangle = require("./shapes").Triangle;

test("test triangle render", () => {
    const shape = new Triangle();
shape.setColor("brown");
expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="brown"/>');
});



const Square = require("./shapes").Square;

test("test square render", () => {
    const shape = new Square();
shape.setColor("pink");
expect(shape.render()).toEqual(`<rect x="68" y="50" width="160" height="160" fill="pink"/>`);
});


const Circle = require("./shapes").Circle;

test("test circle render", () => {
    const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<circle cx="150" cy="135" r="65" fill="blue"/>');
});