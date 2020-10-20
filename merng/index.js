const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');


const typeDefs =  gql`
    type Query{
        sayHi: String!
    }
`

const resolvers = {
    Query: {
        sayHi: () => 'Hello World!!!!!!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

// creating server at port 5000
server.listen({port: 5000})
    .then(res => {
        // outputs the link to the website/server in the terminal
        console.log(`Server Running at ${res.url}`)
        // type "node index" to start the server
        // press CTRL + C to stop the server
    })