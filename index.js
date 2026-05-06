require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Simple api is working')
})

app.use('/fruits', require('./routes/fruits'))

app.listen(port, () => {
    console.log(`Simple api is listening on port ${port}`)
})