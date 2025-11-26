import PlaceholderPage from "./PlaceholderPage";

function HomePage() {
    return (
        <>
            <div className="home-page page">
                <div className="text-container">
                    <div className="intro-header">Hi, I'm Zander</div>
                    <div className="intro-text-container">
                        <div className="intro-text">I'm a Full Stack developer studying computer science <br></br>at <i>Stony Brook University</i>.</div>
                        <div className="intro-text">I love music, art, and finding ways to creatively <br></br>combine these interests with programming.</div>
                        <div className="intro-text">Feel free to wander around, and check out <br></br>some of my projects.</div>
                    </div>
                </div>
                <div className="sticky-note">
                    <div className="sticky-text-container">
                        <div className="skills-title">Skills</div>
                        <div className="skills-container">
                            <div className="skills-column">
                                <span className="skill-item">TypeScript</span>
                                <span className="skill-item">JavaScript</span>
                                <span className="skill-item">React</span>
                                <span className="skill-item">CSS</span>
                                <span className="skill-item">HTML</span>
                                <span className="skill-item">Next.js</span>
                            </div>
                            <div className="skills-column">
                                <span className="skill-item">Java</span>
                                <span className="skill-item">Python</span>
                                <span className="skill-item">Express</span>
                                <span className="skill-item">MongoDB</span>
                                <span className="skill-item">PostgreSQL</span>
                                <span className="skill-item">Tailwind</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;