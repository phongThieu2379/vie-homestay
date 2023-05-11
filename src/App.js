import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Homepage from "./Page/Homepage/Homepage";
import DetailPage from "./Page/DetailPage/DetailPage";
import { Component } from "react";
import Location from "./Page/Location/Location";
import NotFoundLocationPage from "./Page/Homepage/NotFoundLocationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/detail/:id' element={<Layout Component={DetailPage} />} />
        <Route path="/homepage" element={<Layout Component={Homepage} />} />
        <Route path="/location/:id" element={<Layout Component={Location} />} />
        <Route
          path="*"
          element={<Layout Component={NotFoundLocationPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
