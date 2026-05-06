// MODEL LAYER - handles data and translates to JSON (normally)
// '..' goes to folder above
const fruits = require("../fruits.json")

class Fruit {
    constructor(fruit) {
        this.genus = fruit.genus
        this.name = fruit.name
        this.id = fruit.id
        this.family = fruit.family
        this.order = fruit.order
        this.nutritions = fruit.nutritions
    }

    static showAll() {
        return fruits.map(f => new Fruit(f))
    }

    static getFruit(name) {
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() == name)

        if (fruit) {
            return new Fruit(fruit)
        } else {
            throw "fruit not found"
        }
    }

    static create(data) {
        const newFruit = data
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() == data.name.toLowerCase())

        if (fruit) {
            throw "fruit exists already"
        } else {
            newFruit["id"] = fruits.length + 1
            fruits.push(newFruit)
            return new Fruit(newFruit)
        }
    }

    updateFruit(data) {
        const updateFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())

        if (updateFruit) {
            updateFruit.name = data.name
            updateFruit.family = data.family
            return new Fruit(updateFruit)
        } else {
            throw "fruit doesnt exist"
        }
    }
    delete() {
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if (deletedFruit) {
            const index = fruits.indexOf(deletedFruit)
            //splice removes 1 item from the index passed in
            const removedFruit = fruits.splice(index, 1)
            console.log(removedFruit)
            return new Fruit(removedFruit[0])
        } else {
            throw "this fruit doesnt exist"
        }

    }
}

module.exports = Fruit