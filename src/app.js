require('dotenv').config()
require('./config/database')

const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use(require('./routes/index'));

app.use(express.static('public'))

app.listen(process.env.APP_PORT, () => {
    console.log('Server on port %s', process.env.APP_PORT)
})