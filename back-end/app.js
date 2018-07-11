/* =======================
    LOAD THE DEPENDENCIES
========================== */
const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config')

/* =======================
    LOAD THE CONFIG
========================== */
const port = process.env.PORT || 5000

/* =======================
    EXPRESS CONFIGURATION
========================== */
const app = express()

/* =======================
    EXPRESS CONFIGURATION
========================== */

/* =======================
    SET UP MIDDLEWARE
========================== */
// Cross Origin Resource Sharing 현재 도메인과 다른 도메인으로 리소스가 요청되는 경우를 말한다. 이를 허용하는 미들웨어 이다
app.use(cors())
// http header security 헤드를 안전하게 사용 할 수 있도록
app.use(helmet())
// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// print the request log on console
app.use(morgan('dev'))
// set the secret key variable for jwt
app.set('jwt-secret', config.secret)

// index page, just for testing
app.get('/', (req, res) => {
    res.send('Hello JWT')
})

// configure api router
app.use('/api', require('./routes/api'))

// open the server
app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
})

/**
 * CONNECT TO MONGODB SERVER
 */
mongoose.connect(config.mongodbUri)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error)
db.once('open', () => {
    console.log('connected to mongodb server')
})
