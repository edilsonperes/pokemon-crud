const mongoose = require('mongoose')
const fs = require('fs')
const parse = require('csv-parser')
const createNewPokemon = require('../functions/createNewPokemon')
require('dotenv').config({})

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  err => {
    if (err) throw err
    console.log('Connected to the database.')

    fs.createReadStream(__dirname + '/../data/pokemon.csv', {
      encoding: 'utf-8'
    })
      .pipe(parse())
      .on('data', data => {
        createNewPokemon(data, (err, msg) => {
          if (err) {
            throw err
          } else {
            console.log(msg)
          }
        })
      })
  }
)
