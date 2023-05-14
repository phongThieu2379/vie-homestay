import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Homepage from "./Page/Homepage/Homepage";
import Location from "./Page/Location/Location";
import LoginAndSignupModal from "./Page/Homepage/LoginAndSignupModal";
import NotFoundLocationPage from "./Page/Homepage/NotFoundPage/NotFoundLocationPage";
import { adminRoute } from "./Route/Route";

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
            path="notfound"
            element={<Layout Component={NotFoundLocationPage} />}
          />
          <Route
            path="*"
            element={<Layout Component={NotFoundLocationPage} />}
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
