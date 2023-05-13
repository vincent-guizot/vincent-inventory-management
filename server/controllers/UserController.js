const { User } = require("../models");

class UserController {
  static async getAllUsers(req, res) {
    //
    try {
      let users = await User.findAll();

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async register(req, res) {
    //
    try {
      const { email, password } = req.body;
      let result = await User.create({
        email,
        password,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async login(req, res) {
    //
    try {
      const { email, password } = req.body;

      let userFound = await User.findOne({
        where: { email },
      });
      // console.log(userFound);
      if (userFound) {
        if (userFound.password === password) {
          res.status(200).json(userFound);
        } else {
          res.status(400).json({
            message: "Invalid password",
          });
        }
      } else {
        res.status(404).json({
          message: "user not found",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getUserById(req, res) {
    //
    try {
      const id = +req.params.userId;
      let result = await User.findByPk(id);

      if (result) res.status(200).json(result);
      else res.status(404).json({ message: "User not found" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    //
    try {
      const id = +req.params.userId;

      let result = await User.destroy({
        where: { id },
      });

      result
        ? res.status(200).json({ message: "User deleted." })
        : res.status(400).json({ message: "User not delete" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    //
    try {
      const { username, email, password, image, role } = req.body;
      const id = +req.params.userId;

      let result = await User.update(
        {
          username,
          email,
          password,
          image,
          role,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.status(200).json({ message: "User updated" })
        : res.status(400).json({ message: "User not updated" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
