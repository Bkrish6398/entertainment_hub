import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import checkIfUserAithenticated from "../Auth/UserAuth";
import axios from "axios";

function SignInPage() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
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

  const handleSignIn = () => {
    var userCred = {
      email: userEmail,
      password: userPassword,
    };
    console.log("Sign in.....");
    axios
      .post("/user/login", userCred)
      .then((resP) => {
        if (resP != null) {
          if (resP.data.isAuthenticated) {
            localStorage.setItem("role", resP.data.role);
            localStorage.setItem("token", resP.data.token);
            navigate("/");
          }
        }

        if (resP.data.message === "Authentication Successfull") {
          setIsAuthenticated(true);
          alert("You are authenticated");
        }
        if (resP.data.message === "Password doesn't match") {
          setIsAuthenticated(false);
          alert("Username or Password doesn't match");
        }

        console.log(resP);
      })
      .catch((err) => console.log("unable to login...", err));
  };
  return (
    <div>
      This is the sign in
      <div>
        <TextField
          id="outlined-fname-input"
          label="Email"
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Button variant="outlined" onClick={handleSignIn}>
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

export default SignInPage;
