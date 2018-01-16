const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
    id: "dffdfdfe4545",
    text: "Bacon"
  }
];

app.get("/ingredients", (req, res) => {
  res.send(ingredients);
});

app.post("/ingredients", (req, res) => {
  const ingredient = req.body;
  if (!ingredient || !ingredient.text) {
    return res.status(500).send({ error: "must have a text" });
  }
  ingredients.push(ingredient);
  res.status(200).send(ingredients);
});

app.put("/ingredients/:ingredientId", (req, res) => {
  const newText = req.body.text;
  if (!newText || newText == "") {
    return res.send({ error: "Must provide text" });
  }
  let objectFound = false;
  for (let i = 0; i < ingredients.length; i++) {
    const ing = ingredients[i];

    if (ing.id === req.params.ingredientId) {
      ing.text = newText;
      objectFound = true;
      break;
    }
  }
  if (!objectFound) {
    return res.send({ error: "ingredient id not found" });
  }
  res.send(ingredients);
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
