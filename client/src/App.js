import "./App.css";
import SignUpPage from "./Components/SignUpPage";
import HomePage from "./Components/HomePage";
import SignInPage from "./Components/SignInPage";
import ShowProfile from "./Components/ShowProfile";
import { Routes, Route, Link } from "react-router-dom";
import PlayerRegistration from "./Components/PlayerRegistration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<ShowProfile />} />
        <Route path="/player/registration" element={<PlayerRegistration />} />
      </Routes>
    </div>
  );
}

export default App;
