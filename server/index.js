const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fs = require('fs');
const app = express()

const PORT = process.env.PORT || 3001

const todoRouter = require('./controllers/todo')

app.use(express.json())
app.use(cors('http://localhost:3000', 'https://downhillmtbfantasy.onrender.com'))
app.use(todoRouter)

const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

mongoose.connect(config.databaseURL,
    { useNewUrlParser: true, }
)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


