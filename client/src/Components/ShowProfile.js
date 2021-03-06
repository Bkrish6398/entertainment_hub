import React from "react";
import checkIfUserAithenticated from "../Auth/UserAuth";
import NavMenu from "./NavMenu";
function ShowProfile() {
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
  return (
    <div>
      <NavMenu isAuthenticated={isAuthenticated} user={loggedInUser} />
      {isAuthenticated ? (
        <div>
          <div>Your Profile</div>
          <div>
            Full Name: {loggedInUser.firstName} {loggedInUser.lastName}
          </div>
          <div>Email: {loggedInUser.email}</div>
          <div>Role: {loggedInUser.role}</div>
        </div>
      ) : (
        <div>You are not authenticated</div>
      )}
    </div>
  );
}

export default ShowProfile;
