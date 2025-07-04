import "./App.css";
import AssetsPage from "./pages/AssetsPage";
import AssetsUploadPage from "./pages/AssetsUploadPage";
import ErrorPage from "./pages/ErrorPage";
import LayoutPage from "./pages/LayoutPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Navigate to="/assets" replace />} />
          <Route path="/assets" element={<AssetsPage />} />
          <Route path="/assets/upload" element={<AssetsUploadPage />} />
          <Route path="*" element={<ErrorPage code="404" title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;