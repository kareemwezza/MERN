const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ Hi: "there" });
});

// dynamically define the port from the machine we work on
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(PORT));
