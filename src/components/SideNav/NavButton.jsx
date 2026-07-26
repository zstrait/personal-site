import { Link, useLocation } from 'react-router-dom';


function NavButton({ label, link }) {
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === link) {
            const contentView = document.querySelector('.content-view');
            if (contentView) {
                contentView.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <li>
            <Link to={link} onClick={handleClick} className={`nav-button ${label}-button`}></Link>
        </li>
    );
}

export default NavButton;