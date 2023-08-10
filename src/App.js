import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cats/:catId" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
