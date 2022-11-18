import Fastify from "fastify";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/User.js";

dotenv.config();

const fastify = Fastify({
  logger: true,
});
import userRoutes from "./routes/user.js";

fastify.register(userRoutes);

fastify.get("/users", (req, reply) => {
  User.find({}, (err, result) => {
    reply.send(result);
  });
});

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
