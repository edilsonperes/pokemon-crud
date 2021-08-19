import { PokemonModel, IPokemon, IPokemonDoc } from '../models/pokemon'

export async function createNewPokemon(data: IPokemon): Promise<IPokemonDoc> {
  const pokemon = new PokemonModel()

  pokemon.abilities = data.abilities
  pokemon.against_bug = data.against_bug
  pokemon.against_dark = data.against_dark
  pokemon.against_dragon = data.against_dragon
  pokemon.against_electric = data.against_electric
  pokemon.against_fairy = data.against_fairy
  pokemon.against_fight = data.against_fight
  pokemon.against_fire = data.against_fire
  pokemon.against_flying = data.against_flying
  pokemon.against_ghost = data.against_ghost
  pokemon.against_grass = data.against_grass
  pokemon.against_ground = data.against_ground
  pokemon.against_ice = data.against_ice
  pokemon.against_normal = data.against_normal
  pokemon.against_poison = data.against_poison
  pokemon.against_psychic = data.against_psychic
  pokemon.against_rock = data.against_rock
  pokemon.against_steel = data.against_steel
  pokemon.against_water = data.against_water
  pokemon.attack = data.attack
  pokemon.base_egg_steps = data.base_egg_steps
  pokemon.base_happiness = data.base_happiness
  pokemon.base_total = data.base_total
  pokemon.capture_rate = data.capture_rate
  pokemon.classfication = data.classfication
  pokemon.defense = data.defense
  pokemon.experience_growth = data.experience_growth
  pokemon.height_m = data.height_m
  pokemon.hp = data.hp
  pokemon.japanese_name = data.japanese_name
  pokemon.name = data.name
  pokemon.percentage_male = data.percentage_male
  pokemon.pokedex_number = data.pokedex_number
  pokemon.sp_attack = data.sp_attack
  pokemon.sp_defense = data.sp_defense
  pokemon.speed = data.speed
  pokemon.type1 = data.type1
  pokemon.type2 = data.type2
  pokemon.weight_kg = data.weight_kg
  pokemon.generation = data.generation
  pokemon.is_legendary = data.is_legendary

  try {
    return await pokemon.save()
  } catch (err) {
    throw err
  }
}
