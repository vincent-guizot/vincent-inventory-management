const { Item, User } = require("../models");

class ItemController {
  static async getAllItems(req, res) {
    //
    try {
      let Items = await Item.findAll({
        include: [User],
      });

      res.status(200).json(Items);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    //
    try {
      const { name, category, price, stock, image, UserId } = req.body;
      let result = await Item.create({
        name,
        category,
        price,
        stock,
        image,
        UserId,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getItemById(req, res) {
    //
    try {
      const id = +req.params.itemId;
      let result = await Item.findByPk(id);

      if (result) res.status(200).json(result);
      else res.status(404).json({ message: "Item not found" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    //
    try {
      const id = +req.params.itemId;

      let result = await Item.destroy({
        where: { id },
      });

      result
        ? res.status(200).json({ message: "Item deleted." })
        : res.status(400).json({ message: "Item not delete" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    //
    try {
      const { name, category, price, stock, image, UserId } = req.body;
      const id = +req.params.itemId;

      let result = await Item.update(
        {
          name,
          category,
          price,
          stock,
          image,
          UserId,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.status(200).json({ message: "Item updated" })
        : res.status(400).json({ message: "Item not updated" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = ItemController;
