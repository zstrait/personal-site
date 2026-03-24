import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

function HomePage() {
    return (
        <>
            <div className="home-page page">
                <div className="text-container">
                    <RoughNotationGroup show={true}>
                        <div className="intro-header">
                            <RoughNotation type="underline" show={true} strokeWidth={3} padding={0} color="#3D3D3C">
                                Hi, I'm Zander
                            </RoughNotation>
                        </div>
                        <div className="intro-text-container">
                            <div className="intro-text">I'm a{' '}
                                <RoughNotation type='highlight' color='#EDE197' animationDelay={500} animationDuration={2000}>
                                    Full Stack developer
                                </RoughNotation>{' '}
                                studying computer science <br></br>at <i>Stony Brook University</i>.
                            </div>
                            <div className="intro-text">I love music, art, and finding ways to creatively <br></br>combine these interests with programming.</div>
                            <div className="intro-text">Feel free to wander around, and check out <br></br>some of my projects.</div>
                        </div>
                    </RoughNotationGroup>
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