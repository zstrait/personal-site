import './App.css'
import SideNav from './components/SideNav/SideNav.jsx';
import Header from './components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const img1 = new Image(); img1.src = '/cursor/hand1.png';
        const img2 = new Image(); img2.src = '/cursor/hand2.png';
        const img3 = new Image(); img3.src = '/cursor/point1.png';
        const img4 = new Image(); img4.src = '/cursor/point2.png';
        
        const intervalId = setInterval(() => {
            document.body.classList.toggle('cursor-toggle');
        }, 100);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Header />

            <div className="main-wrapper">
                <SideNav />

                <main className="content-view">
                    <div className="paper-background">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}

export default App;
