import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { useNavigate } from "react-router-dom";
import logo from "../Media/Ludo E-Sports-logos_transparent_Resized2.png";
import { height } from "@mui/system";

function NavMenu(props) {
  let navigate = useNavigate();
  var userDisplayName = props.user.firstName + " " + props.user.lastName;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    window.location.reload();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar style={{ height: "10px" }}>
          <img
            alt="logo"
            src={logo}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ludo E-Sports
          </Typography>
          {props.isAuthenticated ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {userDisplayName.match(/\b(\w)/g).join("")}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{userDisplayName}</MenuItem>
                <Divider />
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button variant="outlined" href="/signin">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavMenu;
