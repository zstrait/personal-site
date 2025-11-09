import ProjectItem from "./ProjectItem.jsx";

function ProjectPage() {

    const LaTeXDescription = `I found myself unsatisfied with the LaTeX editors I'd been using for my classes. They were all either super slow, looked like they were made 20 years ago, or locked basic features behind crazy paywalls. So, I decided to make my own version that was free and actually felt good to use. \nThe project features a live, side-by-side preview that renders your equations instantly as you type, along with a custom-themed code editor and some additional tools to make writing math more accessible and enjoyable.`
    const LaTeXTags = ['React', 'Javascript', 'CSS']

    return (
        <>
            <div className="projects-page page">
                <div className="page-title">Projects</div>
                <div className="projects-container">
                    <ProjectItem
                        name="Live LaTeX Editor"
                        description={LaTeXDescription}
                        tags={LaTeXTags}
                        projectLink="https://zstrait.github.io/latex-editor/"
                        gitLink="https://github.com/zstrait/latex-editor"
                    />
                </div>
            </div>
        </>
    )
}


export default ProjectPage;