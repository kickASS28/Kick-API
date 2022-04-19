var express = require("express");
var router = express.Router();
var USERS = require("../public/data/users");
var MEALS = require("../public/data/meals");
var COLORS = require("../public/data/colors");

/* GET users lisnting. */
router.get("/", function (req, res, next) {
  res.redirect("/usage");
});

/* GET users lisnting. */
router.get("/users", function (req, res, next) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(USERS, null, 2));
});

/* GET users listning for user id. */
router.get("/users/:id", function (req, res, next) {
  const id = req.params.id;
  const selectedUser = USERS.filter((user) => user.id === id)[0] || null;
  if (!selectedUser) {
    res.send(404, "User not available current user count is 15");
    return;
  }
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(selectedUser, null, 2));
});
/* GET meals listing. */
router.get("/meals", function (req, res, next) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(MEALS, null, 2));
});
/* GET meals listning for meal id. */
router.get("/meals/:id", function (req, res, next) {
  const id = req.params.id;
  const selectedMeal = MEALS.filter((meal) => meal.id === id)[0] || null;
  if (!selectedMeal) {
    res.send(404, "Meal not available current meal count is 10");
    return;
  }
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(selectedMeal, null, 2));
});

/* GET colors listning. */
router.get("/colors", function (req, res, next) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(COLORS, null, 2));
});

/* GET colors listning for color name. */
router.get("/colors/:name", function (req, res, next) {
  const name = req.params.name;
  const selectedColor =
    COLORS.filter(
      (color) => color.name.toLowerCase() === name.toLocaleLowerCase()
    )[0] || null;
  if (!selectedColor) {
    res.send(404, "Requested color data is not available");
    return;
  }
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(selectedColor, null, 2));
});

/* GET colorspage listning for color name. */
router.get("/colorpage/:name", function (req, res, next) {
  const name = req.params.name;
  const selectedColor =
    COLORS.filter(
      (color) => color.name.toLowerCase() === name.toLocaleLowerCase()
    )[0] || null;
  if (!selectedColor) {
    res.send(404, "Requested color data is not available");
    return;
  }
  const { r, g, b } = selectedColor;
  const textColor =
    r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
  res.render("background", {
    color: `#${selectedColor.hex}`,
    valueStr: JSON.stringify(selectedColor, null, 2),
    valueObj: selectedColor,
    textColor,
  });
});

module.exports = router;
