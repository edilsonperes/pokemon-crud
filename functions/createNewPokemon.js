const PokemonModel = require('../models/pokemon')

async function createNewPokemon(data, callback) {
  let pokemon = new PokemonModel()
  if (typeof data.abilities == 'string') {
    pokemon.abilities = JSON.parse(data.abilities.split("'").join('"'))
  } else {
    pokemon.abilities = data.abilities
  }
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
  if (data.height_m != '') {
    pokemon.height_m = Number(data.height_m)
  }
  pokemon.hp = Number(data.hp)
  pokemon.japanese_name = data.japanese_name
  pokemon.name = data.name
  pokemon.name_lc = data.name.toLowerCase()
  if (data.percentage_male != '') {
    pokemon.percentage_male = Number(data.percentage_male)
  }
  pokemon.pokedex_number = Number(data.pokedex_number)
  pokemon.sp_attack = Number(data.sp_attack)
  pokemon.sp_defense = Number(data.sp_defense)
  pokemon.speed = Number(data.speed)
  pokemon.type1 = data.type1
  pokemon.type2 = data.type2
  if (data.weight_kg != '') {
    pokemon.weight_kg = Number(data.weight_kg)
  }
  pokemon.generation = Number(data.generation)
  pokemon.is_legendary = Boolean(Number(data.is_legendary))
  try {
    const newPokemon = await pokemon.save()
    return callback(null, 'Pokemon saved to the database.', newPokemon)
  } catch (err) {
    return callback(err)
  }
}

module.exports = createNewPokemon
