import { Route, Routes } from "react-router-dom";
import HoverFooter from "./components/Footers/HoverFooter/HoverFooter";
import PartitionFooter from "./components/Footers/PartitionFooter/PartitionFooter";
import UnderLineFoooter from "./components/Footers/UnderLineFooter/UnderLineFooter";
import Buttons from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import FooterPage from "./pages/FooterPage";
import MainPage from "./pages/MainPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/button" element={<Buttons />} />
      <Route path="/card" element={<CardPage />} />
      <Route path="/footer" element={<FooterPage />} />
      <Route path="/footer/partition" element={<PartitionFooter />} />
      <Route path="/footer/underline" element={<UnderLineFoooter />} />
      <Route path="/footer/hover" element={<HoverFooter />} />
    </Routes>
  );
}

export default Router;
