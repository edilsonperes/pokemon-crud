const mongoose = require('mongoose')
const fs = require('fs')
const parse = require('csv-parser')
require('dotenv').config({})

const pokemonSchema = new mongoose.Schema({
  abilities: [
    {
      type: String,
      required: true
    }
  ],
  against_bug: { type: Number, required: true },
  against_dark: { type: Number, required: true },
  against_dragon: { type: Number, required: true },
  against_electric: { type: Number, required: true },
  against_fairy: { type: Number, required: true },
  against_fight: { type: Number, required: true },
  against_fire: { type: Number, required: true },
  against_flying: { type: Number, required: true },
  against_ghost: { type: Number, required: true },
  against_grass: { type: Number, required: true },
  against_ground: { type: Number, required: true },
  against_ice: { type: Number, required: true },
  against_normal: { type: Number, required: true },
  against_poison: { type: Number, required: true },
  against_psychic: { type: Number, required: true },
  against_rock: { type: Number, required: true },
  against_steel: { type: Number, required: true },
  against_water: { type: Number, required: true },
  attack: { type: Number, required: true },
  base_egg_steps: { type: Number, required: true },
  base_happiness: { type: Number, required: true },
  base_total: { type: Number, required: true },
  capture_rate: { type: String, required: true },
  classfication: { type: String, required: true },
  defense: { type: Number, required: true },
  experience_growth: { type: Number, required: true },
  height_m: { type: Number, default: 0 },
  hp: { type: Number, required: true },
  japanese_name: { type: String, required: true },
  name: { type: String, required: true },
  percentage_male: { type: Number, default: 0 },
  pokedex_number: { type: Number, unique: true, required: true },
  sp_attack: { type: Number, required: true },
  sp_defense: { type: Number, required: true },
  speed: { type: Number, required: true },
  type1: { type: String, required: true },
  type2: { type: String, default: '' },
  weight_kg: { type: Number, default: 0 },
  generation: { type: Number, required: true },
  is_legendary: { type: Boolean, required: true }
})

const PokemonModel = mongoose.model('Pokemon', pokemonSchema)

async function createNewPokemon(data) {
  const pokemon = new PokemonModel()

  pokemon.abilities = JSON.parse(data.abilities.split("'").join('"'))
  pokemon.against_bug = Number(data.against_bug)
  pokemon.against_dark = Number(data.against_dark)
  pokemon.against_dragon = Number(data.against_dragon)
  pokemon.against_electric = Number(data.against_electric)
  pokemon.against_fairy = Number(data.against_fairy)
  pokemon.against_fight = Number(data.against_fight)
  pokemon.against_fire = Number(data.against_fire)
  pokemon.against_flying = Number(data.against_flying)
  pokemon.against_ghost = Number(data.against_ghost)
  pokemon.against_grass = Number(data.against_grass)
  pokemon.against_ground = Number(data.against_ground)
  pokemon.against_ice = Number(data.against_ice)
  pokemon.against_normal = Number(data.against_normal)
  pokemon.against_poison = Number(data.against_poison)
  pokemon.against_psychic = Number(data.against_psychic)
  pokemon.against_rock = Number(data.against_rock)
  pokemon.against_steel = Number(data.against_steel)
  pokemon.against_water = Number(data.against_water)
  pokemon.attack = Number(data.attack)
  pokemon.base_egg_steps = Number(data.base_egg_steps)
  pokemon.base_happiness = Number(data.base_happiness)
  pokemon.base_total = Number(data.base_total)
  pokemon.capture_rate = data.capture_rate
  pokemon.classfication = data.classfication
  pokemon.defense = Number(data.defense)
  pokemon.experience_growth = Number(data.experience_growth)
  pokemon.height_m = Number(data.height_m)
  pokemon.hp = Number(data.hp)
  pokemon.japanese_name = data.japanese_name
  pokemon.name = data.name
  pokemon.percentage_male = Number(data.percentage_male)
  pokemon.pokedex_number = Number(data.pokedex_number)
  pokemon.sp_attack = Number(data.sp_attack)
  pokemon.sp_defense = Number(data.sp_defense)
  pokemon.speed = Number(data.speed)
  pokemon.type1 = data.type1
  pokemon.type2 = data.type2
  pokemon.weight_kg = Number(data.weight_kg)
  pokemon.generation = Number(data.generation)
  pokemon.is_legendary = Boolean(Number(data.is_legendary))
  try {
    await pokemon.save()
  } catch (err) {
    throw err
  }
}

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
      .on('data', async data => {
        try {
          await createNewPokemon(data)
          console.log('Pokemon saved to the database.')
        } catch (err) {
          throw err
        }
      })
  }
)
