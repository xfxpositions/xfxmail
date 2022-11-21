import User from "../models/User.js";
import jwt from "jsonwebtoken";
import fastify from "fastify";
import { hash_password } from "../util/cryptoJUtil.js";

function userRoutes(fastify, options, done) {
  fastify.get("/users", (req, reply) => {
    User.find({}, (err, result) => {
      if (err) {
        reply.status(500).send({ err: err.message });
      }
      reply.send(result);
    });
  });

  fastify.post("/login", (req, reply) => {
    const { username } = req.body;
    const password = hash_password(req.body.password);
    User.findOne(
      { $and: [{ name: req.body.username }, { password: password }] },
      (err, result) => {
        console.log(result);
        err && res.status(404).send({ err: err });
        if (result == null) {
          reply.status(404).send({ err: "user not found" });
        } else {
          const user = { username: username };
          const token = jwt.sign(user, process.env.JWT_SECRET + password, {
            expiresIn: "15m",
          });
          reply.send({ token: token });
        }
      }
    );
  });

  fastify.post("/signup", (req, reply) => {
    req.body.password = hash_password(req.body.password);
    User.create(req.body, (err, result) => {
      if (err) {
        if (err.code == 11000) {
          reply
            .status(409)
            .send({ err: "conflict error", message: err.message });
          return;
        }
        reply.status(500).send({ err: err.message });
      } else {
        reply.send({
          message: "user created",
          userdata: result,
        });
      }
    });
  });

  fastify.get("/user/:id", (req, reply) => {
    const id = req.params.id;
    User.findById(id, (err, result) => {
      console.log(result);
      if (result == null) {
        reply.status(404).send({ err: "user not found" });
      } else if (err) {
        reply.status(500).send({ err: err.message });
      }
      reply.send({ result: result });
    });
  });

  done();
}

export default userRoutes;
