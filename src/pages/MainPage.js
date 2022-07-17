import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to={"/card"}>
              <span>카드페이지로 이동</span>
            </Link>
          </li>

          <li>
            <Link to={"/button"}>
              <span>버튼페이지 이동</span>
            </Link>
          </li>

          <li>
            <Link to={"/footer"}>
              <span>Footer페이지 이동</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainPage;
