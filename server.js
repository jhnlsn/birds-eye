const express = require('express')
const app = express()
const morgan = require('morgan')

const config = require('config')
const port = config.port

app.use(morgan('combined'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))