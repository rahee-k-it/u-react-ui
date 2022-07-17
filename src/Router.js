
import { Route, Routes } from "react-router-dom";
import Button from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import MainPage from "./pages/MainPage";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/button" element={<Button />} />

      <Route path="/card" element={<CardPage />} />
    </Routes>
  );
}

export default Router;
