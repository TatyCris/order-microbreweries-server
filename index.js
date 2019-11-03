const express = require('express')
const cors = require('cors')
const microbreweries = require('./microbreweries.json')
const beers = require('./beers.json')

const app = express()
app.use(cors())

app.get('/microbreweries', (req, res) => {
    res.send(microbreweries)
})

app.get('/beers', (req, res) => {
    res.send(beers)
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on :${port}`))