const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("Users List");
});

router.get("/new", (req, res) => {
  //   res.send("New User");
  res.render("users/new", { firstName: "Test" });
});

router.post("/", (req, res) => {
  const valid = true;
  if (valid) {
    users.push({ name: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`user get with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`user update with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`user delete with id ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Sally" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
