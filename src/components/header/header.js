import './header.scss'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="wrapper d-flex p-4">
            <Link to="/" className="p-2">Home</Link>
            {/* <ul className="ms-auto me-5">
                <li className="d-inline-block mx-3">
                    <Link to="/" className="p-2">Market</Link>
                </li>
                <li className="d-inline-block mx-3">
                    <Link to="/coin" className="p-2">Coins</Link>
                </li>
            </ul> */}
        </div>
    );
}

export default Header;