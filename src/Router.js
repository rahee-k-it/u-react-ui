import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Button from './components/Button';
import CardPage from './pages/CardPage';
import Home from './routes/Home';

export function Router() {
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/button">
                <Button />
            </Route>
            <Route path="/card">
                <CardPage />
            </Route>

        </Routes>
    </BrowserRouter>
}

export default Router;
