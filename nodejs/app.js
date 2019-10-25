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
const jwt = require("jsonwebtoken");
const fs = require("fs");

const db = new Firestore({
  projectId: 'akane-1247',
  keyFilename: './api-key.json',
});

const privateKey  = fs.readFileSync('./private.key', 'utf8');
const publicKey  = fs.readFileSync('./public.key', 'utf8');

const typeDefs = gql`
  type Query {
    login(email: String, password: String): String
  }
  type Mutation {
    signup(name: String, email: String, password: String): String
  }
`;

const resolvers = {
  Query: {
    login: async (parent, { email, password }) => {
      try {
        const snapshot = await db.collection('users').where('email', '==', email).get();
        if (snapshot.empty) {
          throw new Error('Username or password is incorrect')
        }
        const user = snapshot.docs[0].data();
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          throw new Error('Username or password is incorrect');
        }

        // jwt.verify(token, publicKey, { algorithm: 'RS256' });
        return 'OK';
      } catch (error) {
        return error.message;
      }
    }
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
      return jwt.sign({user_id: newUserRef.id}, privateKey, { algorithm: 'RS256' });
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
