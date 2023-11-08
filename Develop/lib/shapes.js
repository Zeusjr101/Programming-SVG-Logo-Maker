class shapes {
    constructor() {
        this.shape = '';
        this.color = '';
        this.letters = '';
        this.shapeColor = '';
    }
    setShape(shape) {
        this.shape = shape;
    }
    setColor(color) {
        this.color = color;
    }
}
class Circle extends shapes {
    render() {
        return `<circle cx="100" cy="100" r="50" fill="${this.color}"/>`
    }
}

class Square extends shapes {
    render() {
        return `<rect x="100" y="100" width="50" height = 50 fill="${this.color}"/>`
    }
}

class Triangle extends shapes {
    render() {
        return `<polygon fill="${this.color}" points="100,100 150,50 50,50"/>`
    }
}
module.exports = { Circle, Square, Triangle};  