import globeLogo from "../assets/Globe.svg";
import './header.css';
import "react";

export default function Header() {
    return (
        <header>
            <img src={globeLogo} alt="logo" className="globe-logo" />
            <h1>Travel Journal</h1>
        </header>
    )
}