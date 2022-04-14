import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import checkIfUserAithenticated from "../Auth/UserAuth";
import axios from "axios";
import logo from "../Media/Ludo E-Sports-logos_transparent_Resized2.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

function SignInPage() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const myStyle = {
    padding: "10px",
  };

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar style={{ height: "10px" }}>
          <img src={logo} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ludo E-Sports
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={myStyle}>
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
              <div>
                <Link to="/signup">Create new account</Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default SignInPage;
