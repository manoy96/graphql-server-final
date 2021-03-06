import * as path from 'path'
import { GraphQLServer } from 'graphql-yoga'
import { makePrismaSchema, prismaObjectType } from 'nexus-prisma'
import { prisma } from './generated/prisma-client'
import datamodelInfo from './generated/nexus-prisma'

const Query = prismaObjectType({ 
  name: 'Query',
  // definition: t => t.prismaFields(['pokemons', 'stats'])
  definition: t => t.prismaFields(['rocket', 'rockets', 'rocketsConnection'])
})
const Mutation = prismaObjectType({ 
  name: 'Mutation',
  // definition: t => t.prismaFields(['createPokemon', 'createStat'])
  definition: t => t.prismaFields(['createRocket', 'updateRocket', 'deleteRocket'])
})

const schema = makePrismaSchema({
  types: [Query, Mutation],

  prisma: {
    datamodelInfo,
    client: prisma
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
})

const server = new GraphQLServer({
  schema,
  context: { prisma }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))