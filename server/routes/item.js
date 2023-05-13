const { Router } = require("express");
const itemRoute = Router();
const ItemController = require("../controllers/ItemController");

itemRoute.get("/", ItemController.getAllItems);
itemRoute.post("/create", ItemController.create);
itemRoute.get("/description/:itemId", ItemController.getItemById);
itemRoute.put("/update/:itemId", ItemController.update);
itemRoute.delete("/delete/:itemId", ItemController.delete);

module.exports = itemRoute;
