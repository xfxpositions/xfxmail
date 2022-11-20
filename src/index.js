import Fastify from "fastify";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

import jwtPrehandler from "./plugins/jwtPrehandler.js";
fastify.addHook("preHandler", jwtPrehandler); //jwt authentication

import userRoutes from "./routes/user.js";
fastify.register(userRoutes); // use user routes (just like app.use)

const connect = async () => {
  const dbUrl = process.env.DBURI_LOCAL;
  console.log("Connecting to Database");
  return mongoose
    .connect(dbUrl)
    .then(() => {
      console.log(`Connected to Database`);
    })
    .catch((err) => {
      console.log(`some err on connecting database => ${err}`);
      process.exit(1);
    });
};

const port = process.env.PORT || 8080;
fastify.listen({ port: port }, async (err) => {
  if (err) throw err;
  await connect();
  console.log(`listening on ${port}`);
});
