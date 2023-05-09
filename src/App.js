import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Homepage from "./Page/Homepage/Homepage";
import { Component } from "react";
import Location from "./Page/Location/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<Layout Component={Homepage} />} />
        <Route path="/location/:id" element={<Layout Component={Location} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
