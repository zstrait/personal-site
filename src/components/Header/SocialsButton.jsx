import {useState} from 'react';

function Socialsbutton() {
    const [isSocialsOpen, setIsSocialsOpen] = useState(false);

    const handleClick = () => {
        setIsSocialsOpen(!isSocialsOpen);
    }

    return (
        <>
            <div className="socials-button-container">
                <button className={`socials-button header-button ${isSocialsOpen ? "open" : ""}`} onClick={handleClick}></button>
                <div className={`socials-bar ${isSocialsOpen ? "open" : ""}`}>
                    <a className="socials-icon flickr" href="https://www.flickr.com/photos/zstrt/" target="_blank"></a>
                    <a className="socials-icon letterboxd" href="https://letterboxd.com/elliottsmiff/" target="_blank"></a>
                    <a className="socials-icon instagram" href="https://www.instagram.com/zanderstrt/" target="_blank"></a>
                    <a className="socials-icon spotify" href="https://open.spotify.com/user/47g2z8i6bncxlzas8mqf222fb?si=f95d03d3354047b8" target="_blank"></a>
                    <a className="socials-icon linkedin" href="https://www.linkedin.com/in/zander-strait/" target="_blank"></a>
                    <a className="socials-icon github" href="https://github.com/zstrait" target="_blank"></a>
                </div>
            </div>

        </>
    )
}

export default Socialsbutton