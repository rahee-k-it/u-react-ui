import { Route, Routes } from "react-router-dom";
import Buttons from "./pages/ButtonsPage";
import CardPage from "./pages/CardPage";
import MainPage from "./pages/MainPage";

function Router() {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <MainPage />
                }
            />
            <Route
                path='/button'
                element={
                    <Buttons />
                }
            />
            <Route
                path='/card'
                element={
                    <CardPage />
                }
            />
        </Routes>
    )
}

export default Router;