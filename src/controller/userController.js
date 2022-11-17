import User from "../model/User.js";
import logger from "../util/logger.js";
import jwtUtil from "../util/jwtUtil.js";

const create_post = (req, res) => {
  console.log(req.body);
  const { name, password, forgotMail, phoneNumber } = req.body;
  const user = new User({
    name: name,
    password: password,
    forgotMail: forgotMail,
    phoneNumber: phoneNumber,
  });
  User.find({ name: name }, (result) => {
    console.log(result);
  });
  user.save((err, result) => {
    if (err) {
      logger.error(`error while creating new user => ${err.message}`);
      return res.status(400).json({ err: err.message });
    } else {
      return res.status(200).json({ result: result });
    }
  });
};

const delete_delete = (req, res) => {
  console.log("delete");
  const { id } = req.params;
  User.findByIdAndDelete(id, (err, result) => {
    if (err) {
      return res.status(400).json({ err: err.message });
    } else {
      return res.status(200).json({ result: result });
    }
  });
};

const update_post = (req, res) => {};

const fetch_get = (req, res) => {
  const { id } = req.params;
  User.findById(id, (err, result) => {
    if (err) {
      res.status(403).json({ err: err.message });
    } else {
      res.status(200).json({ result: result });
    }
  });
};

const recoverPassword_get = (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;
  const { username } = jwtUtil.parseToken(token);
  const check = jwtUtil.checkToken(token, result.password);
  if (check) {
    User.findOneAndUpdate(
      { name: username },
      { password: newPassword },
      (err, result) => {
        if (err) {
          res.status(403).json({ err: err.message });
        } else {
          res.status(200).json({ message: "password updated successfully" });
        }
      }
    );
  } else {
    res.status(403).json({ err: "Invalid token" });
  }
};
const recoverPassword_post = (req, res) => {
  console.log(req.body);

  if (req.body?.username == undefined) {
    res.sendStatus(401);
  } else {
    User.find({ username: req.body.username }, (err, result) => {
      if (err) {
        return res.status(403).json({ err: err.message });
      } else {
        const payload = {
          username: result.username,
          id: result._id,
        };
        const token = jwtUtil.createToken(payload, result.password, {
          expiresIn: "15m",
        });
        const link = `http://localhost/recovery/${token}`;
        console.log(link);
        res.status(200).json({ link: link });
      }
    });
  }
};

export {
  create_post,
  delete_delete,
  update_post,
  fetch_get,
  recoverPassword_get,
  recoverPassword_post,
};
