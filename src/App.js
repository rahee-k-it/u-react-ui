import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Router from "./Router";
// import "./assets/css/reset.css";

const GlobalStyle = createGlobalStyle`
    a{
        text-decoration: none;
        color:black;
    }
    li{
        margin-bottom: 10px;
        border-bottom: 1px solid gray;
        width: fit-content;
    }
    h1,h2,h3,h4,h5,h6 {
      margin: 0;
      padding: 0;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Link style={{ textAlign: "center" }} to={""}>
        <h1>Home</h1>
      </Link>
      <Router />
    </>
  );
}

export default App;
