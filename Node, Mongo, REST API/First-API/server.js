const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const ingredients = [
  {
    id: "232kAk",
    text: "Eggs"
  },
  {
    id: "t86u",
    text: "Milk"
  },
  {
    id: "2d8sf97",
    text: "Bacon"
  },
  {
    id: "2d8sf97",
    text: "Bacon"
  }
];

app.get("/", (req, res) => {
  res.send(ingredients);
});

app.post("/", (req, res) => {
  const ingredient = req.body;
  if (!ingredient || !ingredient.text) {
    return res.status(500).send({ error: "must have a text" });
  }
  ingredients.push(ingredient);
  res.status(200).send(ingredients);
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
