const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require("@graphql-tools/schema");

const PORT = 3000;

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql']
});

const resolvers = loadFilesSync('**/*', {
  extensions: ['resolvers.js']
});

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolvers
});  

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`GraphQL server listening on port ${PORT}`);
});
