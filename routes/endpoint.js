const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
const SignUpUser = require("../models/SignUpSchema");
const User = require("../models/DynamicUserTable");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//GET----------Homepage
router.get("/home", (req, res) => {
  console.log(req.body);
  res.json({ message: "Welcome to Homepage" });
});

//GET----------All Items
router.get("/user/all", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then((queryResult) => res.json(queryResult))
    .catch((queryError) => res.json(queryError));
});
//GET----------Item by ID
router.get("/user/get/:id", (req, res) => {
  User.findById(req.params.id)
    .then((queryResult) => res.json(queryResult))
    .catch((queryError) => res.status(400).json(queryError));
});
//POST--------------New User
router.post("/user/new", (req, res) => {
  const newUser = new User({
    name: req.body.name,
  });
  newUser.save().then((savedResp) => res.json(savedResp));
});
//PUT---------------Update User By ID
router.put("/user/update/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
  })
    .then((queryResult) => res.json(queryResult))
    .catch((queryError) => res.status(400).json(queryError));
});
//POST--------------Delete User By ID
router.delete("/user/remove/:id", (req, res) => {
  User.findById(req.params.id)
    .then((queryResult) =>
      queryResult.remove().then(() => res.json(queryResult))
    )
    .catch((queryError) => res.status(400).json(queryError));
});
//POST--------------Create new User
router.post("/user/create/new", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new SignUpUser({
      fName: req.body.fName,
      lName: req.body.lName,
      email: req.body.email,
      password: hashedPassword,
    });
    newUser.save().then((savedResp) => {
      res.json({
        fName: savedResp.fName,
        lName: savedResp.lName,
        email: savedResp.email,
      });
    });
  } catch (err) {}
});
//GET----------All Items(Only for Testing)
router.get("/user/test/login", (req, res) => {
  SignUpUser.find()
    .sort({ date: -1 })
    .then((queryResult) => res.json(queryResult))
    .catch((queryError) => res.json(queryError));
});
//GET----------User by email address
router.get("/user/find/:email", (req, res) => {
  SignUpUser.find({ email: req.params.email }, (err, doc) => {
    if (err) {
      res.json(err);
    } else {
      res.json(doc);
    }
  }).select("email");
});
//POST--------------Login In
router.post("/user/login", async (req, res) => {
  SignUpUser.find({ email: req.body.email }, async (err, doc) => {
    if (err) {
      res.json({ message: "Can not find user", isAuthenticated: false });
    }

    try {
      if (await bcrypt.compare(req.body.password, doc[0].password)) {
        const user = { email: req.body.email };
        jwt.sign(
          user,
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: 300 },
          (err, token) => {
            if (err) throw err;
            res.json({
              message: "Authentication Successfull",
              isAuthenticated: true,
              token: token,
              email: req.body.email,
              role: doc[0].role,
            });
          }
        );
      } else {
        res.json({
          message: "Password doesn't match, Contact support.",
          isAuthenticated: false,
        });
      }
    } catch (err) {
      res.json({ message: "Authentication failed", isAuthenticated: false });
    }
  }).select("email password role");
});

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.json({ message: "Your are not authorized", isAuthorized: false });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.json({ message: "Your are not authorized", isAuthorized: false });
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

//GET------------------------Check if user is authenticated
router.get("/isUserAuthenticated", verifyToken, (req, res) => {
  res.json({ message: "You are authorized", isAuthorized: true });
});

module.exports = router;
