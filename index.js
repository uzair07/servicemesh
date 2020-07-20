const express = require('express')
const app = express()

const r1 = require('./ping.js')
const r2 = require('./healthcheck.js')

app.use('/ping', r1)
app.use('/healthCheck', r2)

app.listen(8001);