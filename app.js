/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START gae_node_request_example]
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const Firestore = require('@google-cloud/firestore');
const bcrypt = require("bcrypt");

const db = new Firestore({
  projectId: 'akane-1247',
  keyFilename: './akane-1247-9a4dcd68d623.json',
});

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
    signup(name: String, email: String, password: String): String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello there'
  },
  Mutation: {
    signup: async (parent, { name, email, password }, context, info) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const usersRef = db.collection('users');
      const newUserRef = usersRef.doc();
      await newUserRef.set({
        id: newUserRef.id,
        name,
        email,
        password: hashedPassword,
      });
      return newUserRef.id;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(express.static('build'));

server.applyMiddleware({ app });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
