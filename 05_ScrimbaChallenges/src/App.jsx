import "react";
import "./App.css";
import reactLogo from "./assets/react.svg"; // Import the image

export default function App() {
    return (
       <header>
           <img
               src={reactLogo} // Use the imported image
               alt="React logo"
               className="react-logo"
           />
       </header>
    );
}
