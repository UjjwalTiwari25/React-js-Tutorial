import testImage from "../assets/TestImage.png";
import phoneIcon from "../assets/phone-icon.png";
import mailIcon from "../assets/mail-icon.png";

export default function Card() {
    return (
        <div className="contacts">
            <article className="contact-card">
                <img src={testImage} alt="Photo of Mr. Virat Kohli" />
                <h3>Mr. Virat Kohli</h3>
                <div className="info-group">
                    <img src={phoneIcon} alt="phone icon" />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src={mailIcon} alt="mail icon" />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </article>
        </div>
    );
}
