const Fruit = require('../models/Fruits')

const index = async (req, res) => {
    try { 
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits)
    } catch(err) {
        res.status(500).send({error: err})
    }
}

const findFruit = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruitName = await Fruit.getFruit(name)
        res.status(200).send(fruitName)
    } catch(err) {
        res.status(500).send({error: err})
    }
}

const createFruit = async (req, res) => {
    const fruitData = req.body

    try {
        const fruitObj = await Fruit.create(fruitData)
        res.status(200).send(fruitObj)
    } catch(err) {
        res.status(409).send({error: err})
    }
}

const updateFruit = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await Fruit.getFruit(name)
        const result = await fruit.updateFruit(req.body)
        res.status(200).send(result)
    } catch(err) {
        res.status(404).send({error: err})
    }
}

const deleteFruits = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        await Fruit.delete(name)
        res.status(200).send({ message: `${name} deleted` })
    } catch(err) {
        res.status(404).send({error: err})
    }
}

module.exports = {
    index,
    findFruit,
    createFruit,
    updateFruit,
    deleteFruits,
}