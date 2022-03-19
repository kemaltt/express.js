const express = require('express')
const path = require('path')
const fs = require('fs')

const foodRouter = require('./routes/foodRoutes')

const foods = JSON.parse(fs.readFileSync(`${__dirname}/models/data.json`))

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, '/puplic')))
// app.use('css', express.static(path.join(__dirname, '/puplic/css')))
app.use('/foods', foodRouter)


app.get('/', (req, res) => {
    //res.send('HELLLOOOOO')
    res.render('home.ejs')
})

app.get('/welcome/:name', (req, res) => {
    const { name } = req.params
    res.render('welcome', { name: name })
})

// app.get('/foods', (req, res) => {
//     res.render('foods', { data: foods })
// })



module.exports = app