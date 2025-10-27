function ProjectItem({name, description, projectLink, gitLink, learnLink }) {

    return (
        <>
            <div className="project-item">
                <div className="project-preview"></div>
                <div className="project-info">
                    <div className="project-header">
                        <div className="project-name">{name}</div>
                        <a className="github-button" href={gitLink} target="_blank"></a>
                    </div>
                    <div className="project-desc">{description}</div>
                    <div className="project-links">
                        <a className="try-button" href={projectLink} target="_blank">Try Now</a>
                        <a className="learn-link" href={learnLink} target="_blank">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectItem;