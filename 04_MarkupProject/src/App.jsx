import React from "react";
import "./App.css";
import viteLogo from "./assets/vite.svg"; // Import the image

export default function App() {
    return (
        <div className="card">
            <img
                src={viteLogo} // Use the imported image
                alt="Vite logo"
                className="react-logo"
            />
            <h1>Fun facts about React!</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </div>
    );
}
