const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/fruits', require('./routes/fruits'))

app.listen(port, () => {
    console.log(`Simple api is listening on port ${port}`)
})