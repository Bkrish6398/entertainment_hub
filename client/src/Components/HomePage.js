import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import checkIfUserAithenticated from "../Auth/UserAuth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavMenu from "./NavMenu";
import PlayerCards from "./PlayerCards";

function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loggedInUser, setLoggedInUser] = React.useState({});

  const playerCardStyle = {
    paddingTop: "20px",
  };

  React.useEffect(() => {
    //check if user is already logged in

    checkIfUserAithenticated()
      .then((resP) => {
        if (resP != null) {
          if (resP.data.isAuthorized === true) {
            var userInfo = {
              firstName: localStorage.getItem("firstName"),
              lastName: localStorage.getItem("lastName"),
              role: localStorage.getItem("role"),
              email: localStorage.getItem("email"),
            };

            setIsAuthenticated(true);
            setLoggedInUser(userInfo);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <NavMenu isAuthenticated={isAuthenticated} user={loggedInUser} />
      </div>

      {isAuthenticated === true ? (
        <div>
          <div style={playerCardStyle}>
            <PlayerCards />
          </div>
        </div>
      ) : (
        <div>Please login</div>
      )}
    </div>
  );
}

export default HomePage;
