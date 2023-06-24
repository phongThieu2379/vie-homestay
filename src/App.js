import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Homepage from "./Page/Homepage/Homepage";

import DetailPage from "./Page/DetailPage/DetailPage";
import { Component } from "react";

import Location from "./Page/Location/Location";
import LoginAndSignupModal from "./Page/Homepage/LoginAndSignupModal";
import NotFoundLocationPage from "./Page/Homepage/NotFoundPage/NotFoundLocationPage";
import { adminRoute } from "./Route/Route";
import Spinner from "./Component/Spinner/Spinner";
import UserPage from "./Page/UserPage/UserPage/UserPage";

function App() {
  return (
    <div>
      <Spinner />
      <LoginAndSignupModal />
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Layout Component={Homepage} />} />
          <Route
            path="/location/:id"
            element={<Layout Component={Location} />}
          />
          <Route
            path="notfound"
            element={<Layout Component={NotFoundLocationPage} />}
          />
          <Route
            path="*"
            element={<Layout Component={NotFoundLocationPage} />}
          />
          <Route
            path="/detail/:id"
            element={<Layout Component={DetailPage} />}
          />
          <Route
            path="/user-information"
            element={<Layout Component={UserPage} />}
          />

          {adminRoute.map(({ url, component }) => {
            return <Route key={url} path={url} element={component} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
