// run the actual program
const express = require('express');
const fruits = require('./fruits.json');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Simple api is working');
});

app.get('/fruits', (req, res) => {
  res.json(fruits);
});

app.get('/fruits/:name', (req, res) => {
  const fruitName = req.params.name.toLowerCase();

  const fruit = fruits.find(fruit => fruit.name.toLowerCase() === fruitName);

  if (fruit) {
    res.json(fruit);
  } else {
    res.status(404).json({ message: 'Fruit not found' });
  }
});

app.listen(port, () => {
  console.log(`Simple api is listening on port ${port}`);
});
