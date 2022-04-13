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

function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loggedInUser, setLoggedInUser] = React.useState({});

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

  // return (
  //   <div>
  //     <div>This is Homepage of Ven0m</div>
  //     <div>{isAuthenticated === true ? "You are loggedin" : ""}</div>
  //     {isAuthenticated === false ? (
  //       <div>
  //         <nav>
  //           <Link to="/signup">Sign Up</Link>
  //         </nav>
  //         <nav>
  //           <Link to="/signin">Sign In</Link>
  //         </nav>
  //       </div>
  //     ) : null}
  //   </div>
  // );

  return (
    <div>
      <NavMenu isAuthenticated={isAuthenticated} user={loggedInUser} />
    </div>
  );
}

export default HomePage;
