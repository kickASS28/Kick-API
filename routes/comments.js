var express = require("express");
var fs = require("fs");
var router = express.Router();

/* sending all user comments . */
router.get("/", function (req, res, next) {
  // res.header("Content-Type", "application/json");
  fs.readFile(__dirname + "/Comments.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Something went wrong!");
    } else {
      res.send(data);
    }
  });
});

// Posting new user comment
router.post("/", function (req, res, next) {
  const newCommment = req.body;
  fs.readFile(__dirname + "/Comments.json", (err, data) => {
    if (err) {
      res.status(500).send("Something went wrong!");
    } else {
      const comments = JSON.parse(data);
      comments.push(newCommment);
      const updatedComments = JSON.stringify(comments, null, 2);
      fs.writeFile(
        __dirname + "/Comments.json",
        updatedComments,
        { encoding: "utf-8" },
        (err) => {
          if (err) {
            res.status(500).send("Something went wrong!");
          } else {
            res.status(200).send("Comment posted successfully!");
          }
        }
      );
    }
  });
});

module.exports = router;
