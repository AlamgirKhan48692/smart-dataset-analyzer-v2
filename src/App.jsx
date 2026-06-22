import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Information from "./pages/Information";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;