import React from "react";
import "../App.css";
import HomePage from "./HomePage";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import checkIfUserAithenticated from "../Auth/UserAuth";
import axios from "axios";
import * as yup from "yup";
import { Formik } from "formik";
import Box from "@mui/material/Box";

function SignUpPage() {
  const navigate = useNavigate();
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  let schema = yup.object().shape({
    fName: yup.string().required(),
    lName: yup.string().required(),
    email: yup.string().email(),
  });

  React.useEffect(() => {
    //check if user is already logged in
    checkIfUserAithenticated()
      .then((resP) => {
        if (resP != null) {
          if (resP.data.isAuthorized === true) {
            setIsAuthenticated(true);
            navigate("/");
          }
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  const handleSubmit = () => {
    const userData = {
      fName: fName,
      lName: lName,
      email: email.toLowerCase(),
      password: password,
    };

    //check if user already exist in the DB
    console.log(userData.email);
    axios
      .get("/user/find/" + userData.email)
      .then((resP) => {
        if (resP.data.length > 0) {
          if (resP.data[0].email === userData.email) {
            alert("Account already exist. Please signin");
            navigate("/signin");
          } else {
            //create new user
            axios
              .post("/user/create/new", userData)
              .then((resP) => {
                alert("Your account is succesfully created, Please login");
                navigate("/signin");
              })
              .catch((err) => {
                console.log("Error while creating new user", err);
                alert("Unable to create your account at this moment");
              });
          }
        } else {
          //create new user
          axios
            .post("/user/create/new", userData)
            .then((resP) => {
              alert("Your account is succesfully created, Please login");
              navigate("/signin");
            })
            .catch((err) => {
              console.log("Error while creating new user", err);
              alert("Unable to create your account at this moment");
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      Sign up Page
      <div></div>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required={true}
            id="outlined-fname-input"
            label="First Name"
            onChange={(e) => setFName(e.target.value)}
          />
          <TextField
            required={true}
            id="outlined-lname-input"
            label="Last Name"
            onChange={(e) => setLName(e.target.value)}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required={true}
            id="outlined-email-input"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required={true}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <div>
          <Button variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="outlined" href="/">
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
