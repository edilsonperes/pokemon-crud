const mongoose = require('mongoose')

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
  name_lc: { type: String, required: true },
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

module.exports = mongoose.model('Pokemon', pokemonSchema)
