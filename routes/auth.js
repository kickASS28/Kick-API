var express = require("express");
var fs = require("fs");
var router = express.Router();
var {
  transporter,
  mailOptionsAdmin,
  mailOptionsUser,
} = require("./sendMailTOAdmin");

var userCount = 1;

/* handling login requsts. */
router.post("/login", function (req, res, next) {
  const { emailOrUsername, password } = req.body;
  if (emailOrUsername === "" || password === "") {
    res.status(200).send({
      ok: false,
      error: "Please enter valid credentials!",
    });
  }
  fs.readFile(__dirname + "/Appusers.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send("Something went wrong!");
    } else {
      const availableUsersData = JSON.parse(data);
      const selectedUser = availableUsersData.find(
        (user) =>
          user.email === emailOrUsername || user.username === emailOrUsername
      );
      if (!selectedUser) {
        res.status(200).send({
          ok: false,
          error: "Username or Email do not exist!",
        });
      } else {
        if (selectedUser.password === password) {
          res.status(200).send({
            ok: true,
            username: selectedUser.username,
          });
        } else {
          res.status(200).send({
            ok: false,
            error: "Password do not match!",
          });
        }
      }
    }
  });
});

// handling sign-up requests
router.post("/signup", async function (req, res, next) {
  const newUser = req.body;
  const { username, password, email } = req.body;
  if (username === "" || password === "" || email === "") {
    res.status(200).send({
      ok: false,
      error: "Please enter valid credentials!",
    });
  }
  const finalMailOptions = {
    ...mailOptionsAdmin,
    text: `Hi Kick, 
    
Congratulations! New user registered for your API.

Username: ${username}
Email: ${email}
Total Users: ${userCount + 1}
    
Please Validate the Database!`,
  };
  const finalMailOptions1 = {
    ...mailOptionsUser,
    to: email,
    text: `Hi ${username},
    
Congratulations! You have registered successfully for Kick-API.
    
We will keep you updated regulary.
 
Regards,
Ashwamedh
Kick-Development, IND-MH, KOP.`,
  };
  await transporter.sendMail(finalMailOptions);
  await transporter.sendMail(finalMailOptions1);
  fs.readFile(__dirname + "/Appusers.json", (err, data) => {
    if (err) {
      res.status(404).send("Something went wrong!");
    } else {
      const users = JSON.parse(data);
      if (users.find((user) => user.email === email)) {
        res.status(200).send({
          ok: false,
          error: "Entered email address already exists!",
        });
      } else if (users.find((user) => user.username === username)) {
        res.status(200).send({
          ok: false,
          error: "Entered username already exists!",
        });
      } else {
        users.push(newUser);
        const updatedUsers = JSON.stringify(users, null, 2);
        userCount += 1;
        fs.writeFile(
          __dirname + "/Appusers.json",
          updatedUsers,
          { encoding: "utf-8" },
          (err) => {
            if (err) {
              res.status(200).send("Something went wrong!");
            } else {
              res.status(200).send({
                ok: true,
                username: newUser.username,
              });
            }
          }
        );
      }
    }
  });
});

module.exports = router;
