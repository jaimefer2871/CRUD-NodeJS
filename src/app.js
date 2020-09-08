require('dotenv').config()
require('./config/database')

const express = require('express')
const app = express()
const helmet = require('helmet')
const jwt = require('jsonwebtoken');
const cors = require('cors')
const JsonResponse = require('./helpers/json_response')

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(async (req, res, next) => {

    try {
        if (req.url !== '/api/login') {
            //get the token from the header if present
            const token = req.headers["x-access-token"] || req.headers["authorization"];
            //if no token found, return response (without going to the next middelware)
            if (!token) {
                res.status(401)
                JsonResponse(res, {})
            }
            //if can verify the token, set req.user and pass to next middleware
            jwt.verify(token, process.env.TOKEN_PRIVATE_KEY);
            next();
        } else {
            next()
        }
    } catch (ex) {
        //if invalid token
        res.status(400);
        JsonResponse(res, ex)
    }

})
app.use(require('./routes/index'));
app.use(express.static('public'))

app.listen(process.env.APP_PORT, () => {
    console.log('Server on port %s', process.env.APP_PORT)
})