import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>메인페이지</h1>
            <div>
                <Link to={''}>메인페이지로 이동</Link>
            </div>
            <div>
                <Link to={'/card'}>카드페이지로 이동</Link>
            </div>
        </>
    );
}

export default Home;