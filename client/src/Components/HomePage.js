import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import checkIfUserAithenticated from "../Auth/UserAuth";

function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [userRole, setUserRole] = React.useState("");

  React.useEffect(() => {
    //check if user is already logged in
    var userRoleVar = localStorage.getItem("role");
    setUserRole(userRoleVar);
    checkIfUserAithenticated()
      .then((resP) => {
        if (resP != null) {
          if (resP.data.isAuthorized === true) {
            setIsAuthenticated(true);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>This is Homepage of Ven0m</div>
      <div>{isAuthenticated === true ? "You are loggedin" : ""}</div>
      {isAuthenticated === false ? (
        <div>
          <nav>
            <Link to="/signup">Sign Up</Link>
          </nav>
          <nav>
            <Link to="/signin">Sign In</Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

export default HomePage;
