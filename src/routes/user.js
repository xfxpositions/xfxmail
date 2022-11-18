import User from "../models/User.js";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

function userRoutes(fastify, options, done) {
  fastify.get("/users/", (req, reply) => {
    User.find({}, (err, result) => {
      if (err) {
        reply.status(500).send({ err: err.message });
      }
      reply.send(result);
    });
  });

  fastify.post("/login", (req, reply) => {
    const { username, password } = req.body;

    User.findOne(
      { $and: [{ name: req.body.username }, { password: req.body.password }] },
      (err, result) => {
        console.log(result);
        err && res.status(404).send({ err: err });
        if (result == null) {
          reply.status(404).send({ err: "not found" });
        } else {
          const user = { username: username, password: password };
          const token = jwt.sign(user, process.env.JWT_SECRET + user.password, {
            expiresIn: "15m",
          });
          reply.send({ token: token });
        }
      }
    );
  });

  fastify.post("/signup", (req, reply) => {
    User.create(req.body, (err, result) => {
      if (err) {
        reply.status(500).send({ err: err.message });
      }

      reply.send({ message: "user created", userdata: result });
    });
  });
  fastify.get("/user/:id", (req, reply) => {
    const id = req.params.id;
    User.findById(id, (err, result) => {
      console.log(result);
      if (result == null) {
        reply.status(404).send({ err: "not found" });
      } else if (err) {
        reply.status(500).send({ err: err.message });
      }
      reply.send({ result: result });
    });
  });
  done();
}

export default userRoutes;
