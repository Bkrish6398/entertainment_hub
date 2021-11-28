import "./App.css";
import SignUpPage from "./Components/SignUpPage";
import HomePage from "./Components/HomePage";
import SignInPage from "./Components/SignInPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
