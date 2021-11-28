import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  return (
    <div>
      This is Homepage
      <div>
        <nav>
          <Link to="/signup">Sign Up</Link>
        </nav>
        <nav>
          <Link to="/signin">Sign In</Link>
        </nav>
      </div>
    </div>
  );
}

export default HomePage;
