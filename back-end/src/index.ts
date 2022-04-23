import { ApolloServer } from 'apollo-server'
import path from 'path'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { context } from './context'
import { PhotoResolver } from './resolvers/PhotoResolver'

async function main() {
  const schema = await buildSchema({
    resolvers: [PhotoResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({ schema, context: context })

  const { url } = await server.listen()

  console.log(`Unsplash server is running 🚀, GraphQL Playground available at ${url}`)
}

main()
