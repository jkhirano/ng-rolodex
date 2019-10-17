const express = require("express");
const bodyParser = require("body-parser");

const PORT = 8080;

const app = express();
app.use(bodyParser.json());

app.post("/api/create", (req, res) => {
  const { body } = req;
  console.log(body);
  res.json({
    success: 200
  });
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
