const axios = require("axios");

exports.findAll = (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((apicall) => {
      res.send(apicall.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.findById = (req, res) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)
    .then((apicall) => {
      res.send(apicall.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.create = (req, res) => {
  console.log(req.body);
  const { id, name, username, email, address, phone, website, company } =
    req.body;

  axios
    .post("https://jsonplaceholder.typicode.com/users", {
      id: id,
      name: name,
      email: email,
      address: address,
      phone: phone,
      website: website,
      company: company,
    })
    .then((apicall) => {
      res.send(apicall.data);
    })
    .catch((error) => {
      res.send(error);
    });
};

exports.update = (req, res) => {
  axios
    .put(`https://jsonplaceholder.typicode.com/users/${req.params.id}`, {
      name: req.body.name,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.delete = (req, res) => {
  axios
    .delete("https://jsonplaceholder.typicode.com/users/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
