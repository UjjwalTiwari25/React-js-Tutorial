import callIcon from '../assets/call.jpeg';
import emailIcon from '../assets/email.png';

export default function Card(props) {
    return (
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src={callIcon}
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src={emailIcon}
                    alt="mail icon"
                />
                <p>{props.email}</p>
            </div>
        </article>
    )
}
