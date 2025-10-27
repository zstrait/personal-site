import ProjectItem from "./ProjectItem.jsx";

function ProjectPage() {

    const LaTeXDescription = `Project Description: Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum`;

    return (
        <>
            <div className="projects-page page">
                <div className="page-title">Projects</div>
                <div className="projects-container">
                    <ProjectItem
                        name="Live LaTeX Editor"
                        description={LaTeXDescription}
                        projectLink="https://zstrait.github.io/latex-editor/"
                        gitLink="https://github.com/zstrait/latex-editor"
                    />
                </div>
            </div>
        </>
    )
}


export default ProjectPage;