import { useState } from 'react';
import NavButton from './NavButton';
import Tv from './Tv';

function SideNav() {
    const [isNavOpen, setIsNavOpen] = useState(true);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <>
            <nav className={`nav-bar ${isNavOpen ? "" : "closed"}`}>
                <div className="nav-container">
                    <Tv />
                    <div className="buttons-container">
                        <ul className="nav-buttons">
                            <NavButton label="projects" link="/projects" />
                            {/* <NavButton label="blogs" link="/build-logs" /> */}
                            {/* <NavButton label="media" link="/media" /> */}
                            <div className='nav-button blogs-button coming-soon' />
                            <div className='nav-button media-button coming-soon' />
                            <NavButton label="photography" link="/photography" />
                            <NavButton label="about" link="/" />
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