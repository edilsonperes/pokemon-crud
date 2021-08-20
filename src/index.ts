import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { buildSchema } from 'type-graphql'
import { PokemonsResolvers } from '../graphql/resolvers'
dotenv.config({})

if (!process.env.MONGO_URI) {
  throw new Error('Erro ao carregar variavel de ambiente.')
}

if (!process.env.SERVER_PORT) {
  throw new Error('Erro ao carregar variavel de ambiente.')
}

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [PokemonsResolvers]
  })

  const server = new ApolloServer({ schema })
  server
    .listen({ port: process.env.SERVER_PORT })
    .then(({ url }) => console.log(`Server started at ${url}`))
}

bootstrap()

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
