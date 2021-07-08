module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/users.controller");

  router.get("/", controller.findAll);
  router.get("/:id", controller.findById);

  router.post("/", controller.create);

  router.put("/:id", controller.update);

  router.delete("/:id", controller.delete);

  app.use("/api/users", router);
};
