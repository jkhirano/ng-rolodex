const express = require("express");
const bodyParser = require("body-parser");

const PORT = 8080;

const app = express();
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
