const axios = require("axios");

exports.findAll = (req, res) => {
  axios("https://jsonplaceholder.typicode.com/todos").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  axios(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`).then(
    (apicall) => {
      res.send(apicall.data);
    }
  );
};
