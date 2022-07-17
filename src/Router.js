import { Route, Routes } from "react-router-dom";
import ButtonPage from "./pages/ButtonPage";

import CardPage from "./pages/CardPage";
import FooterPage from "./pages/FooterPage";
import MainPage from "./pages/MainPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/button" element={<ButtonPage />} />
      <Route path="/card" element={<CardPage />} />
      <Route path="/footer" element={<FooterPage />} />
    </Routes>
  );
}

export default Router;
