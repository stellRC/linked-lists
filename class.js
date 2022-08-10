class House {
    // blueprint
    constructor(color) {
        this.color = color
    }

    getFurniture() {
        return 'sofa'
    }
}

// instantiated object of House
const houseObject = new House('red')
const houseObject2 = new House('blue')

// console.log(houseObject)
// console.log(houseObject2.getFurniture())
