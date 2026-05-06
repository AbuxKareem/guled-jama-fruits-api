// ROUTE LAYER - connect endpoint with function
// Add to the api the ability to search for a fruit by name like so http://localhost:3000/fruits/apple - Answer is in the complete code

const express = require("express")
const router = express.Router()
const fruits = require("../controllers/fruits")

// maps endpoint '/' to fruits.index controller function
// doesnt need the brackets because its middleware - more interested in the object than the function
router.get('/', fruits.index)
// sets parameter to be callable by params.name
router.get('/:name', fruits.findFruit)

//creating a fruit and adding it
router.post('/', fruits.createFruit)

//
router.patch('/:name',fruits.updateFruit)

router.delete('/delete/:name', fruits.deleteFruits)


module.exports = router