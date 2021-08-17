const { ApolloServer, gql } = require('apollo-server')
const PokemonModel = require('../models/pokemon')
const mongoose = require('mongoose')
const createNewPokemon = require('../functions/createNewPokemon')
require('dotenv').config({})

const typeDefs = gql`
  type Pokemon {
    _id: ID!
    abilities: [String!]!
    against_bug: Float!
    against_dark: Float!
    against_dragon: Float!
    against_electric: Float!
    against_fairy: Float!
    against_fight: Float!
    against_fire: Float!
    against_flying: Float!
    against_ghost: Float!
    against_grass: Float!
    against_ground: Float!
    against_ice: Float!
    against_normal: Float!
    against_poison: Float!
    against_psychic: Float!
    against_rock: Float!
    against_steel: Float!
    against_water: Float!
    attack: Int!
    base_egg_steps: Int!
    base_happiness: Int!
    base_total: Int!
    capture_rate: String!
    classfication: String!
    defense: Int!
    experience_growth: Int!
    height_m: Float
    hp: Int!
    japanese_name: String!
    name: String!
    percentage_male: Float
    pokedex_number: Int!
    sp_attack: Int!
    sp_defense: Int!
    speed: Int!
    type1: String!
    type2: String
    weight_kg: Float
    generation: Int!
    is_legendary: Boolean!
  }

  input PokemonInput {
    abilities: [String!]!
    against_bug: Float!
    against_dark: Float!
    against_dragon: Float!
    against_electric: Float!
    against_fairy: Float!
    against_fight: Float!
    against_fire: Float!
    against_flying: Float!
    against_ghost: Float!
    against_grass: Float!
    against_ground: Float!
    against_ice: Float!
    against_normal: Float!
    against_poison: Float!
    against_psychic: Float!
    against_rock: Float!
    against_steel: Float!
    against_water: Float!
    attack: Int!
    base_egg_steps: Int!
    base_happiness: Int!
    base_total: Int!
    capture_rate: String!
    classfication: String!
    defense: Int!
    experience_growth: Int!
    height_m: Float
    hp: Int!
    japanese_name: String!
    name: String!
    percentage_male: Float
    pokedex_number: Int!
    sp_attack: Int!
    sp_defense: Int!
    speed: Int!
    type1: String!
    type2: String
    weight_kg: Float
    generation: Int!
    is_legendary: Boolean!
  }

  type Query {
    findPokemons(name: String, qty: Int): [Pokemon!]!
  }

  type Mutation {
    createPokemon(data: PokemonInput!): Pokemon!
    # updatePokemon(name: String!, data: PokemonInput): Pokemon!
    deletePokemon(name: String!): Boolean!
  }
`

const resolvers = {
  Query: {
    findPokemons: async (_, { name, qty }) => {
      if (name) {
        if (qty) {
          return await PokemonModel.find({
            name_lc: { $regex: '.*' + name.toLowerCase() + '.*' }
          })
            .limit(qty)
            .sort({ name: 1 })
            .exec()
        } else {
          return await PokemonModel.find({
            name_lc: { $regex: '.*' + name.toLowerCase() + '.*' }
          })
            .sort({ name: 1 })
            .exec()
        }
      } else {
        if (qty) {
          return await PokemonModel.find({}).limit(qty).exec()
        } else {
          return await PokemonModel.find({}).exec()
        }
      }
    }
  },
  Mutation: {
    createPokemon: async (_, { data }) =>
      await createNewPokemon(data, (err, msg, newPokemon) => {
        if (err) {
          throw err
        } else {
          console.log(msg)
          return newPokemon
        }
      }),
    // updatePokemon: (_, {name, data}) => ,
    deletePokemon: async (_, { name }) => {
      const deleted = await PokemonModel.findOneAndDelete({ name: name }).exec()
      console.log(deleted)
      return !!deleted
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`Server started at ${url}`))

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  err => {
    if (err) {
      throw err
    } else {
      console.log('Connected to the database.')
    }
  }
)
