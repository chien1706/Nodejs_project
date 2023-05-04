const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    return res.send("Hello Min!")
})

app.get('/', (req, res) => res.send("Hello Chien") )

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))