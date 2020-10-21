const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

// for connecting to database, 
// allows us to innterface with the mongoDB database
const mongoose = require('mongoose');   

const { MONGODB } = require('./config.js');

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


// finding the server port
// if no website port found, then create using port = 3000
// localhost:3000
const port = process.env.PORT || 3000;

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB has connected!');
        server.listen(port)
    })
    .then((res) => {
        // outputs the link to the website/server in the terminal
        console.log(`Server Running at ${port}`);
        // type "node index" to start the server
        // press CTRL + C to stop the server
    });
