import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />} />
        <Route path="/assets" element={<LayoutPage />} />
        <Route path="/assets/upload" element={<LayoutPage />} />
        <Route path="*" element={<ErrorPage code="404" title="Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;