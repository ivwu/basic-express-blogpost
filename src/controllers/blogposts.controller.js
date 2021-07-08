const axios = require("axios");

exports.findAll = (req, res) => {
  // call json placeholder api with axios to get list of blogposts
  // res.send("You have reached the controller method for get all blog posts.");
  axios.get("https://jsonplaceholder.typicode.com/posts").then((apicall) => {
    // console.log("apicall", apicall);
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    });
  // res.send(
  //   `You have reached the controller method requesting the blog post with id of ${req.params.id}`
  // );
};
