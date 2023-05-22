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

function App() {
  return (
// <<<<<<< HEAD
//     <BrowserRouter>
//       <Routes>
//         <Route path='/detail/:id' element={<Layout Component={DetailPage} />} />
//         <Route path="/homepage" element={<Layout Component={Homepage} />} />
//         <Route path="/location/:id" element={<Layout Component={Location} />} />
//         <Route
//           path="*"
//           element={<Layout Component={NotFoundLocationPage} />}
//         />
//       </Routes>
//     </BrowserRouter>
// =======
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
            path="notfound"
            element={<Layout Component={NotFoundLocationPage} />}
          />
          <Route
            path="*"
            element={<Layout Component={NotFoundLocationPage} />}
          />
          <Route
           path='/detail/:id' 
           element={<Layout Component={DetailPage} />} />

          {adminRoute.map(({ url, component }) => {
            return <Route key={url} path={url} element={component} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
