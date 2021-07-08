module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/todos.controllers");

  router.get("/", controller.findAll);

  router.get("/:id", controller.findById);

  router.post("/", controller.create);

  app.use("/api/todos", router);
};
