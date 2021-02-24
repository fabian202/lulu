import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

// can also be a function that accepts a `context` object (SSR only) and returns a config
const config = {
  link: new HttpLink({
    uri: 'https://data-lulu.herokuapp.com/v1/graphql', // <- Configure GraphQL Server URL (must be absolute)
  })
}

export default withData(config)
