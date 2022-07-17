import { Route, Routes } from "react-router-dom";
import Buttons from "./pages/ButtonsPage";
import CardPage from "./pages/CardPage";
import MainPage from "./pages/MainPage";
import NavBarPage from "./pages/NavBarPage";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/button" element={<Button />} />

      <Route path="/card" element={<CardPage />} />
      <Route path="/navbar" element={<NavBarPage />} />
    </Routes>
  );
}

export default Router;
