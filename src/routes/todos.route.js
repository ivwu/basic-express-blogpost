module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/todos.controllers");

  router.get("/", controller.findAll);

  router.get("/:id", controller.findById);

  app.use("/api/todos", router);
};
