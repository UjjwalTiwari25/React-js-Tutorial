import reactLogo from "../assets/react.svg";
import "../App.css";

export default function Header(){
    return(
        <><div className="HeaderContent">
            <img src={reactLogo} alt="React logo" className="react-logo"/>

            <header>
                <h1>React is Fun </h1>
            </header>
        </div>
        </>
    )
}