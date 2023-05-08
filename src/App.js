import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Homepage from "./Page/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<Layout Component={Homepage} />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
