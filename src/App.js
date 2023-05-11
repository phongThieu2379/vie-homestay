import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Homepage from "./Page/Homepage/Homepage";
import DetailPage from "./Page/DetailPage/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout Component={Homepage} />} />
        <Route path='/detail/:id' element={<Layout Component={DetailPage} />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
