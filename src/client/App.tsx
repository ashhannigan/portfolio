import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles.css";
import SearchPage from "./collections/SearchPage";
import HomePage from "./collections/HomePage"; 
import NavBar from "./navBar";
import * as React from "react";
import LoginPage from "./login/loginPage";
import SignupPage from "./signup/signupPage";
import IntroPage from "./collections/IntroPage";

const App: React.FC = () => {
  return (
    <div>
      {/* Alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
              <NavBar />
               <IntroPage/>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <NavBar />
                <SearchPage />
                <HomePage />
              </>
            }
          />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
