import { ApolloServer, gql } from 'apollo-server'
import { PokemonModel, IPokemon, IPokemonDoc } from '../models/pokemon'
import mongoose from 'mongoose'
import { createNewPokemon } from '../functions/createNewPokemon'
import dotenv from 'dotenv'
dotenv.config({})

if (!process.env.MONGO_URI) {
  throw new Error('Erro ao carregar variavel de ambiente.')
}

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
    deletePokemon(name: String!): Boolean!
  }
`

const resolvers = {
  Query: {
    findPokemons: async (
      _: any,
      { name, qty }: { name: string; qty: number }
    ) => {
      if (name) {
        if (qty) {
          return await PokemonModel.find({
            name: { $regex: new RegExp(name, 'i') }
          })
            .limit(qty)
            .sort({ name: 1 })
            .exec()
        } else {
          return await PokemonModel.find({
            name: { $regex: new RegExp(name, 'i') }
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
    createPokemon: async (_: any, { data }: { data: IPokemon }) => {
      try {
        const newPokemon: IPokemonDoc = await createNewPokemon(data)
        console.log('Pokemon saved to the database.')
        return newPokemon
      } catch (err) {
        throw err
      }
    },
    deletePokemon: async (_: any, { name }: { name: string }) => {
      const deleted = await PokemonModel.findOneAndDelete({ name: name }).exec()
      console.log('DELETED\n', deleted)
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
