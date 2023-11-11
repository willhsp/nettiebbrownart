import { ApolloClient, InMemoryCache } from '@apollo/client/core'

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
    uri: 'https://graphql.contentful.com/content/v1/spaces/bu7m9d6pqhmj',
    cache,
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer Wg53fY2DzFe5ZVa2Ciog4UuZEzK2apatyt0xYg7RFHk`,
    },
  });