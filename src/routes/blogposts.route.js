module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/blogposts.controller");
  // router.get("/", (req, res) => {
  //   res.send("You have reached the router handler for get all blog posts.");
  // });
  router.get("/", controller.findAll);

  router.get("/:id", controller.findById);

  // create a blog post
  router.post("/", controller.create);

  // update a blog post
  router.put("/:id", controller.update);

  //delete a blog post by id
  router.delete("/:id", controller.delete);

  app.use("/api/blogposts", router);
};
