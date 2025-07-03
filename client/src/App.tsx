import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />} />
        <Route path="/assets" element={<LayoutPage />} />
        <Route path="/assets/upload" element={<LayoutPage />} />
        <Route path="*" element={<LayoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;