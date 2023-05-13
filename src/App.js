import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Homepage from "./Page/Homepage/Homepage";
import { Component } from "react";
import Location from "./Page/Location/Location";
import LoginAndSignupModal from "./Page/Homepage/LoginAndSignupModal";
import NotFoundLocationPage from "./Page/Homepage/NotFoundPage/NotFoundLocationPage";

function App() {
  return (
    <div>
      <LoginAndSignupModal />
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Layout Component={Homepage} />} />
          <Route
            path="/location/:id"
            element={<Layout Component={Location} />}
          />
          <Route
            path="*"
            element={<Layout Component={NotFoundLocationPage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
