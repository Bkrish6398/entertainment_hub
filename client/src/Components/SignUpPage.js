import React from "react";
import "../App.css";
import HomePage from "./HomePage";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

function SignUpPage() {
  const navigate = useNavigate();
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    const userData = {
      fName: fName,
      lName: lName,
      email: email,
      password: password,
    };
    console.log("Creating new user in DB");
    axios
      .post("/user/create/new", userData)
      .then((resP) => {
        console.log("Successfully Created User");
        navigate("/signin");
      })
      .catch((err) => {
        console.log("Error while creating new user", err);
      });
    console.log("Completed");
  };

  return (
    <div className="App">
      Sign up Page
      <div></div>
      <div>
        <TextField
          id="outlined-fname-input"
          label="First Name"
          onChange={(e) => setFName(e.target.value)}
        />
        <TextField
          id="outlined-lname-input"
          label="Last Name"
          onChange={(e) => setLName(e.target.value)}
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outlined" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </div>
  );
}

export default SignUpPage;
