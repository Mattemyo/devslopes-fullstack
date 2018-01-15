const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("my first api");
});
app.get("/funions", (req, res) => {
  res.send("funions");
});



app.listen(3000, () => {
    console.log('App listening on port 3000!');
});