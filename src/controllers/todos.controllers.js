const axios = require("axios");

exports.findAll = (req, res) => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.create = (req, res) => {
  console.log(req.body);
  const { title, completed } = req.body;
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: completed,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};
