import { Link } from 'react-router-dom';

function NavButton({ label, link }) {
    return (
        <li>
            <Link to={link} className={`nav-button ${label}-button`}></Link>
        </li>
    );
}

export default NavButton;