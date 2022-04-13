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

  const handleSignIn = () => {
    var userCred = {
      email: userEmail.toLowerCase(),
      password: userPassword,
    };
    //signing user in
    axios
      .post("/user/login", userCred)
      .then((resP) => {
        console.log(resP);
        if (resP != null) {
          if (resP.data.isAuthenticated) {
            localStorage.setItem("role", resP.data.role);
            localStorage.setItem("token", resP.data.token);
            localStorage.setItem("firstName", resP.data.firstName);
            localStorage.setItem("lastName", resP.data.lastName);
            localStorage.setItem("email", resP.data.email);
            window.location.reload();
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
        if (resP.data.message === "Authentication failed") {
          setIsAuthenticated(false);
          alert("User account does't exist, please create an account");
          navigate("/signup");
        }
      })
      .catch((err) => {
        console.log("unable to login...", err);
        alert("Unable to login");
      });
  };
  return (
    <div>
      This is the sign in
      <div>
        <TextField
          required={true}
          id="outlined-fname-input"
          label="Email"
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <TextField
          required={true}
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
