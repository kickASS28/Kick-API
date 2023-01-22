var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var apiRouter = require("./routes/api");
var commentRouter = require("./routes/comments");
var authRouter = require("./routes/auth");

var app = express();
var port = process.env.PORT || 3000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api", apiRouter);
app.use("/comments", commentRouter);
app.use("/auth", authRouter);

app.get("*", (req, res) => res.redirect("https://kick-api-docs.onrender.com/"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
