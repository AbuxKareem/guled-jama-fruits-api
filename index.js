require('dotenv').config()
const port = process.env.port

const express = require('express')
const app = express()
const port = process.env.port



app.listen(port, () => {
    console.log(`Simple api is listening on port ${port}`)
})