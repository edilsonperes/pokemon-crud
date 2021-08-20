import 'reflect-metadata'
import { Field, InputType, ObjectType, ID } from 'type-graphql'

@ObjectType()
class PokemonReturn {
  @Field(type => ID)
  _id: string

  @Field(type => [String])
  abilities: string[]

  @Field()
  against_bug: number

  @Field()
  against_dark: number

  @Field()
  against_dragon: number

  @Field()
  against_electric: number

  @Field()
  against_fairy: number

  @Field()
  against_fight: number

  @Field()
  against_fire: number

  @Field()
  against_flying: number

  @Field()
  against_ghost: number

  @Field()
  against_grass: number

  @Field()
  against_ground: number

  @Field()
  against_ice: number

  @Field()
  against_normal: number

  @Field()
  against_poison: number

  @Field()
  against_psychic: number

  @Field()
  against_rock: number

  @Field()
  against_steel: number

  @Field()
  against_water: number

  @Field()
  attack: number

  @Field()
  base_egg_steps: number

  @Field()
  base_happiness: number

  @Field()
  base_total: number

  @Field()
  capture_rate: string

  @Field()
  classfication: string

  @Field()
  defense: number

  @Field()
  experience_growth: number

  @Field({ nullable: true })
  height_m?: number

  @Field()
  hp: number

  @Field()
  japanese_name: string

  @Field()
  name: string

  @Field({ nullable: true })
  percentage_male?: number

  @Field()
  pokedex_number: number

  @Field()
  sp_attack: number

  @Field()
  sp_defense: number

  @Field()
  speed: number

  @Field()
  type1: string

  @Field({ nullable: true })
  type2?: string

  @Field({ nullable: true })
  weight_kg?: number

  @Field()
  generation: number

  @Field()
  is_legendary: boolean
}

@InputType()
class PokemonInput {
  @Field(type => [String])
  abilities: string[]

  @Field()
  against_bug: number

  @Field()
  against_dark: number

  @Field()
  against_dragon: number

  @Field()
  against_electric: number

  @Field()
  against_fairy: number

  @Field()
  against_fight: number

  @Field()
  against_fire: number

  @Field()
  against_flying: number

  @Field()
  against_ghost: number

  @Field()
  against_grass: number

  @Field()
  against_ground: number

  @Field()
  against_ice: number

  @Field()
  against_normal: number

  @Field()
  against_poison: number

  @Field()
  against_psychic: number

  @Field()
  against_rock: number

  @Field()
  against_steel: number

  @Field()
  against_water: number

  @Field()
  attack: number

  @Field()
  base_egg_steps: number

  @Field()
  base_happiness: number

  @Field()
  base_total: number

  @Field()
  capture_rate: string

  @Field()
  classfication: string

  @Field()
  defense: number

  @Field()
  experience_growth: number

  @Field({ nullable: true })
  height_m?: number

  @Field()
  hp: number

  @Field()
  japanese_name: string

  @Field()
  name: string

  @Field({ nullable: true })
  percentage_male?: number

  @Field()
  pokedex_number: number

  @Field()
  sp_attack: number

  @Field()
  sp_defense: number

  @Field()
  speed: number

  @Field()
  type1: string

  @Field({ nullable: true })
  type2?: string

  @Field({ nullable: true })
  weight_kg?: number

  @Field()
  generation: number

  @Field()
  is_legendary: boolean
}

export { PokemonReturn, PokemonInput }
