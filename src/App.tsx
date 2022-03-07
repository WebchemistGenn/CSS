import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CSSModulePage from "./pages/css_module";
import HomePage from "./pages/home";
import StyledComponentPage from "./pages/styled_components";
import UsefulPage from "./pages/useful";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/styled-components" element={<StyledComponentPage />} />
        <Route path="/css-module" element={<CSSModulePage />} />
        <Route path="/useful" element={<UsefulPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
