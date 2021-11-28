import axios from "axios";
var sessionToken = localStorage.getItem("token");
const checkIfUserAithenticated = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/isUserAuthenticated", {
        headers: {
          "x-access-token": sessionToken,
        },
      })
      .then((resP) => {
        if (resP != null) {
          if (resP.data.isAuthorized === true) {
          }
        }

        resolve(resP);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default checkIfUserAithenticated;
