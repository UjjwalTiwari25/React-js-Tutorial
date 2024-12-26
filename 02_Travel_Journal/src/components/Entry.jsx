import './entry.css';
import "react";
import mapLogo from "../assets/map.svg";

export default function Entry() {
    return (
        <article>
        <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji" 
        className="entry-img"/>
        <div>
            <img src={mapLogo}  alt="map marker icon" className="map-logo" />
            <span>Japan</span>
            <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
        </div>
    </article>
    )
}