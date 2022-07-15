import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
 a{
        text-decoration: none;
        color:black;
    }
    li{
        margin-bottom: 10px;
        width: fit-content;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Link style={{ textAlign: 'center' }} to={''}>
        <h1>Home</h1>
      </Link>
      <Router />
    </>
  );
}

export default App;
