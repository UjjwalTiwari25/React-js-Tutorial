import reactLogo from "../assets/react.svg";
import "../App.css";

function Header() {
    return (
        <header>
            <img
                src={reactLogo}
                alt="React logo"
                className="react-logo"
            />
        </header>
    );
}

export default Header;
