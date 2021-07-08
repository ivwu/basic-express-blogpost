const express = require("express");
const app = express();

// middleware to convert requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the top route in the Blog Post API");
});

require("./src/routes/blogposts.route")(app);
require("./src/routes/todos.route")(app);
require("./src/routes/users.route")(app);

app.listen(3000, () => {
  console.log("blogpost is listening on port 3000 :)");
});
