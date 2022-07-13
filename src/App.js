import Button from './components/Button';
import CardPage from './pages/CardPage';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/button'
          element={
            <div>
              <Button title='Button' />
            </div>
          }
        />
        <Route
          path='/'
          element={
            <div>
              <MainPage />
            </div>
          }
        />
        <Route
          path='/card'
          element={
            <div>
              <CardPage />
            </div>
          }
        />
      </Routes>
    </>
  );
}
function MainPage() {
  return (
    <>
      <h1>메인페이지</h1>
      <div>
        <Link to={'/'}>메인페이지로 이동</Link>
      </div>
      <div>
        <Link to={'/card'}>카드페이지로 이동</Link>
      </div>
    </>
  );
}
export default App;
