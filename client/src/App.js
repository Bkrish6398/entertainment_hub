import "./App.css";
import SignUpPage from "./Components/SignUpPage";
import HomePage from "./Components/HomePage";
import SignInPage from "./Components/SignInPage";
import ShowProfile from "./Components/ShowProfile";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<ShowProfile />} />
      </Routes>
    </div>
  );
}

export default App;
