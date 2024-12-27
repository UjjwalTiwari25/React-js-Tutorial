import 'react';
import './App.css';
import Card from "./components/Card";
import kohliImage from './assets/kohli.jpg'; // Adjust path as necessary

const contacts = [
    {
        img: kohliImage,
        name: "Virat Kohli",
        phone: "9919227323",
        email: "kohli@virat.com"
    },
    // Add more contacts here if needed
];

function App() {
    return (
        <>
            <div className="card-grid">
                {contacts.map((contact, index) => (
                    <Card 
                        key={index} 
                        img={contact.img} 
                        name={contact.name} 
                        phone={contact.phone} 
                        email={contact.email} 
                    />
                ))}
            </div>
        </>
    );
}

export default App;
