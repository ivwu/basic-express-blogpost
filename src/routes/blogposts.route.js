module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/blogposts.controller");
  // router.get("/", (req, res) => {
  //   res.send("You have reached the router handler for get all blog posts.");
  // });
  router.get("/", controller.findAll);

  router.get("/:id", controller.findById);

  app.use("/api/blogposts", router);
};
