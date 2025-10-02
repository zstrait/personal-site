import './App.css'

function App() {

    return (
        <>
            <header className="header">
                <button className="socials-button header-button"></button>
                <button className="resume-button header-button"></button>
            </header>

            <div className="main-wrapper">
                <nav className="nav-bar">
                    <div className="nav-container">
                        <div className="tv-box"></div>
                        <div className="buttons-container">
                            <ul className="nav-buttons">
                                <li><button className="projects-button nav-button"></button></li>
                                <li><button className="blogs-button nav-button"></button></li>
                                <li><button className="media-button nav-button"></button></li>
                                <li><button className="photo-button nav-button"></button></li>
                                <li><button className="about-button nav-button"></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pull-tab" onclick="toggleSidebar()">
                        <img className="pull-arrow" src={"./public/icons/arrow.svg"}/>
                    </div>
                </nav>

                <main className="content-view">
                    <div className="paper-background">
                        <img className="construction" src={"./public/gifs/under-construction.gif"}/>
                    </div>
                </main>
            </div>
        </>
    )
}

export default App
