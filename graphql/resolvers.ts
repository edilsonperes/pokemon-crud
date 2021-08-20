import 'reflect-metadata'
import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { PokemonReturn, PokemonInput } from './typeDefs'
import { PokemonModel, IPokemonDoc } from '../models/PokemonModel'
import { createNewPokemon } from '../functions/createNewPokemon'

@Resolver()
class PokemonsResolvers {
  @Query(returns => [PokemonReturn])
  async findPokemons(
    @Arg('name', { nullable: true }) name?: string,
    @Arg('qty', { nullable: true }) qty?: number
  ) {
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

  @Mutation(returns => PokemonReturn)
  async createPokemon(@Arg('data') data: PokemonInput) {
    try {
      const newPokemon: IPokemonDoc = await createNewPokemon(data)
      console.log('Pokemon saved to the database.')
      return newPokemon
    } catch (err) {
      throw err
    }
  }

  @Mutation(returns => Boolean)
  async deletePokemon(@Arg('name') name: string) {
    const deleted = await PokemonModel.findOneAndDelete({ name: name }).exec()
    console.log('DELETED\n', deleted)
    return !!deleted
  }
}

export { PokemonsResolvers }
