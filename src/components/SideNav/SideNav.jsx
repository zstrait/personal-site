import { useState } from 'react';
import NavButton from './NavButton';

function SideNav() {
    const [isNavOpen, setIsNavOpen] = useState(true);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <>
            <nav className={`nav-bar ${isNavOpen ? "" : "closed"}`}>
                <div className="nav-container">
                    <div className="tv-box"></div>
                    <div className="buttons-container">
                        <ul className="nav-buttons">
                            <NavButton label="projects" link="/projects" />
                            <NavButton label="blogs" link="/build-logs" />
                            <NavButton label="media" link="/media" />
                            <NavButton label="photography" link="/photography" />
                            <NavButton label="about" link="/about" />
                        </ul>
                    </div>
                </div>
                <div className="pull-tab" onClick={toggleNav}>
                    <img className="pull-arrow" src={"/icons/arrow.svg"} />
                </div>
            </nav>
        </>
    )
}

export default SideNav;