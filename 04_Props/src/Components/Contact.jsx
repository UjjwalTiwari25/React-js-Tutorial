function Contact() {
    return (<>
            <div className="contacts">
            <article className="contact-card">
                <img 
                    src="./images/TestImage.png"
                    alt="Photo of Mr. Virat Kohli"
                />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img 
                        src="./images/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img 
                        src="./images/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </article>
        </div>
        </>
    )
}

export default Contact