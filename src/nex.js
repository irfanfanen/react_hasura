const client = new ApolloClient({
    cache,
    link: new HttpLink(
        {
            uri: 'https://dsafa.hasura.app/v1/graphql',
            headers: {
                'x-hasura-admin-secret': 'BoZg6QhvkRVJ7mT3yo5eygQcrRFhmfs4vFdM7G98vRdsadWg13OS9ghJcAa7y0mTVVf'
            }
        }
    ),
})