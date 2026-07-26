import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

function AboutPage() {
    return (
        <>
            <div className="about-page page">
                <div className='about-title'></div>
                <div>
                    <div className="text-container">
                        <RoughNotationGroup show={true}>
                            <div className="intro-header about">
                                <RoughNotation type="underline" show={true} strokeWidth={3} padding={0} color="#3D3D3C">
                                    Hi, I'm Zander
                                </RoughNotation>
                            </div>
                            <div className="intro-text-container about">
                                <div className="intro-text">I'm a{' '}
                                    <RoughNotation type='highlight' color='#EDE197' animationDelay={500} animationDuration={2000}>
                                        Full Stack developer
                                    </RoughNotation>{' '}
                                    based in New York, <br></br>studying computer science at <i>Stony Brook University</i>.
                                </div>
                                <div className="intro-text">I love music, art, and finding ways to creatively <br></br>combine these interests with programming.</div>
                            </div>
                        </RoughNotationGroup>
                    </div>
                    <div className="about-me-pic">
                    </div>
                </div>
                <div>
                    <div className="sticky-note about">
                        <div className="sticky-text-container">
                            <div className="note-title">Skills</div>
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
                    <div className="about-text right-align">
                        I've always loved tinkering around with pretty much
                        anything I could get my hands on. <br></br>
                        What first sparked my interest in computers was building
                        a homemade arcade cabinet emulator out of an old Raspberry Pi when I was 10. <br></br>
                        Ever since then, I've loved finding creative ways to use technology to solve problems and build things I care about. <br></br>
                        (Currently working on building guitar pedals)
                    </div>
                </div>
                <div>
                    <div className='about-notesheet'>
                        <div className='notesheet-container'>
                            <div className="note-title education">Education</div>
                            <div className="education-column">
                                <div className='education-item'>
                                    <span className='education-header'>College:</span> 
                                    <div className='education-college'>
                                        <span>Stony Brook University</span>
                                        <span className='education-subtext'>(Expected Grad May 2027)</span>
                                    </div>
                                </div>
                                <span className='education-item'> <span className='education-header'>Major:</span> Computer Science</span>
                                <span className='education-header'>Relevant Courses:</span>
                                <div className='classes-container'>
                                    <span className='class-item'>• Data Structures & Algorithms</span>
                                    <span className='class-item'>• Software Development</span>
                                    <span className='class-item'>• Analysis of Algorithms</span>
                                    <span className='class-item'>• Object-Oriented Programming</span>
                                    <span className='class-item'>• Computational Geometry</span>
                                    <span className='class-item'>• Graph Theory & Combinatorics</span>
                                    <span className='class-item'>• Programming Abstractions</span>
                                    <span className='class-item'>• Systems-Level Programming</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hobbies'>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutPage;