// MODEL LAYER - handles data and translates to JSON (normally)
// '..' goes to folder above
const fruits = require("../fruits.json")

class Fruit {
    constructor(fruit) {
        // this only works because we are getting the data from a json file
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
        // using find not filter - find is good for returning one object, filter returns array
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() == name)

        if (fruit) {
            return new Fruit(fruit)
        } else {
            throw "fruit not found"
        }


        return fruit
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
        update(data {
            const updateFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())

            if (updateFruit) {
                updateFruit.name = data.name
                updateFruit.family = data.familyreturn new Fruit(updateFruit)
            } else {
                throw "throw this fruit doesnt exist"
            }
        })
    }
}

module.exports = Fruit