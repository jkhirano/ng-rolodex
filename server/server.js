const express = require("express");
const bodyParser = require("body-parser");
const dbDecorator = require("./database/decorator");

const PORT = 8080;

const Contact = require("./database/models/Contact");
const User = require("./database/models/User");

const app = express();

// const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(dbDecorator);

app.post("/api/create", (req, res) => {
  const { body } = req;
  console.log(body);
  res.json({
    success: 200
  });
});

app.get("/api/contacts", (req, res) => {
  // const { body } = req;
  // console.log(body);
  // res.json({ success: 200 });
  return Contact.fetchAll().then(results => {
    res.status(200).json(results);
  });
});

app.get("/api/home", (req, res) => {
  return Contact.fetchAll().then(results => {
    res.status(200).json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
