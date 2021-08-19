import mongoose from 'mongoose'

export interface IPokemon {
  abilities: string[]
  against_bug: number
  against_dark: number
  against_dragon: number
  against_electric: number
  against_fairy: number
  against_fight: number
  against_fire: number
  against_flying: number
  against_ghost: number
  against_grass: number
  against_ground: number
  against_ice: number
  against_normal: number
  against_poison: number
  against_psychic: number
  against_rock: number
  against_steel: number
  against_water: number
  attack: number
  base_egg_steps: number
  base_happiness: number
  base_total: number
  capture_rate: string
  classfication: string
  defense: number
  experience_growth: number
  height_m?: number
  hp: number
  japanese_name: string
  name: string
  percentage_male?: number
  pokedex_number: number
  sp_attack: number
  sp_defense: number
  speed: number
  type1: string
  type2?: string
  weight_kg?: number
  generation: number
  is_legendary: boolean
}

export interface IPokemonDoc extends IPokemon, Document {}

const pokemonSchema = new mongoose.Schema<IPokemon>({
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

export const PokemonModel = mongoose.model<IPokemonDoc>(
  'Pokemon',
  pokemonSchema
)
