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

exports.create = (req, res) => {
  // console.log(req.body);
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: req.body.title,
      body: req.body.body,
      userId: req.body.userId,
    })
    .then(
      (response) => {
        res.send(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
};

exports.update = (req, res) => {
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {
      title: req.body.title,
      id: req.body.id,
      body: req.body.body,
      userId: req.body.userId,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.delete = (req, res) => {
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
