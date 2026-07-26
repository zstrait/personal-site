import './App.css'
import SideNav from './components/SideNav/SideNav.jsx';
import HeaderButtons from './components/Header/HeaderButtons.jsx';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

function App() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const contentViewRef = useRef(null);


    useEffect(() => {
        const img1 = new Image(); img1.src = '/cursor/hand1.png';
        const img2 = new Image(); img2.src = '/cursor/hand2.png';
        const img3 = new Image(); img3.src = '/cursor/point1.png';
        const img4 = new Image(); img4.src = '/cursor/point2.png';

        const intervalId = setInterval(() => {
            document.body.classList.toggle('cursor-toggle');
        }, 90);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (contentViewRef.current) {
            contentViewRef.current.scrollTop = 0;
        }
    }, [location.pathname]);

    const handleScroll = (e) => {
        setIsScrolled(e.target.scrollTop > 5);
    };

    const isXlPage = ['/projects', '/about'].includes(location.pathname);

    return (
        <>
            <Link to="/" className="home-button" title="Go Home"></Link>
            <HeaderButtons isScrolled={isScrolled} />
            <a href="mailto:zanderstrait@gmail.com?subject=Reaching%20Out%20from%20your%20Website"
                className={`mail-button header-button ${isScrolled ? 'scrolled' : ''}`}></a>

            <div className="main-wrapper">

                <SideNav />

                <main ref={contentViewRef} className="content-view" onScroll={handleScroll}>
                    <div className="content-spacer"></div>
                    <div className={`paper-background ${isXlPage ? 'xl-bg' : ''}`}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}

export default App;
