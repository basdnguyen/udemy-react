import * as express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import * as Firestore from "@google-cloud/firestore";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as fs from "fs";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";

const db = new Firestore.Firestore({
  projectId: "akane-1247",
  keyFilename: "./api-key.json"
});

const privateKey = fs.readFileSync("./private.key", "utf8");
const publicKey = fs.readFileSync("./public.key", "utf8");

const typeDefs = gql`
  type Query {
    login(email: String, password: String): String
    currentUser: User
  }
  type Mutation {
    signup(name: String, email: String, password: String): String
  }
  type User {
    id: String
    name: String
  }
`;

const resolvers = {
  Query: {
    login: async (parent, { email, password }) => {
      try {
        const snapshot = await db
          .collection("users")
          .where("email", "==", email)
          .get();
        if (snapshot.empty) {
          throw new Error("Username or password is incorrect");
        }
        const user = snapshot.docs[0].data();
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          throw new Error("Username or password is incorrect");
        }
        return "OK";
      } catch (error) {
        return error.message;
      }
    },
    currentUser: async (root, args, { user_id }) => {
      try {
        const snapshot = await db
          .collection("users")
          .where("id", "==", user_id)
          .get();
        if (snapshot.empty) {
          throw new Error("Not logged in");
        }
        return snapshot.docs[0].data();
      } catch (error) {
        return null;
      }
    }
  },
  Mutation: {
    signup: async (parent, { name, email, password }, context, info) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const usersRef = db.collection("users");
      const newUserRef = usersRef.doc();
      await newUserRef.set({
        id: newUserRef.id,
        name,
        email,
        password: hashedPassword
      });
      const payload = { user_id: newUserRef.id };
      return jwt.sign(payload, privateKey, {
        algorithm: "RS256"
      });
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: ExpressContext) => {
    try {
      const bearer = req.headers.authorization || "";
      const token = bearer.replace("Bearer ", "");
      const payload = jwt.verify(token, publicKey, { algorithm: "RS256" });
      return { user_id: payload.user_id };
    } catch (error) {
      return {};
    }
  }
});

const app = express();
app.use(express.static("build"));

server.applyMiddleware({ app });

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log("Press Ctrl+C to quit.");
});

module.exports = app;
