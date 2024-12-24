import "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Card from "./components/Card"; // Import the new Card component
import "./App.css";

function App() {
    return (
        <div>
            <Card>
                <Header />
                <Content />
                <Footer />
            </Card>
        </div>
    );
}

export default App;
