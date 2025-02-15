const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");  // ✅ Ensure schema.js exports typeDefs correctly
const resolvers = require("./resolvers");  // ✅ Ensure resolvers.js exports resolvers correctly

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start Server
server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
