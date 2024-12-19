import reactLogo from "../assets/react.svg";
import "../App.css";

function Header() {
    return (
        <header>
            <img src={reactLogo} alt="React logo" className="react-logo" />
            <nav>
                <ul className={"nav-list"}>
                    <li className = "nav-list">Home</li>
                    <li className = "nav-list">About</li>
                    <li className = "nav-list">Contact</li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;
