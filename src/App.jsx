import './App.css'
import SideNav from './components/SideNav/SideNav.jsx';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';

function App() {

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
