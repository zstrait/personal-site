import ProjectItem from "./ProjectItem.jsx";

function ProjectPage() {

    const LaTeXDescription = `I found myself unsatisfied with the LaTeX editors I'd been using for my classes. They were all either super slow, looked like they were made 20 years ago, or locked basic features behind crazy paywalls. So, I decided to make my own version that was free and actually felt good to use. \nThe project features a live, side-by-side preview that renders your equations instantly as you type, along with a custom-themed code editor and some additional tools to make writing math more accessible and enjoyable.`
    const LaTeXTags = ['React', 'Javascript', 'CSS']

    const StereoFMDescription = `A full-stack web application where users can catalog their favorite songs, curate custom playlists, and explore music shared by others. \nFeatures include full authentication, dynamic sorting and filtering, an integrated player for playlist playback, and a pre-loaded demo account for easy exploration.`
    const StereoFMTags = ['React', 'Node', 'Express', 'MongoDB', 'Mongoose', 'MUI', 'JWT']

    return (
        <>
            <div className="projects-page page">
                <div className="page-title">Projects</div>
                <div className="projects-container">
                    <ProjectItem
                        name="Live LaTeX Editor"
                        previewClass="latex"
                        description={LaTeXDescription}
                        tags={LaTeXTags}
                        projectLink="https://zstrait.github.io/latex-editor/"
                        gitLink="https://github.com/zstrait/latex-editor"
                    />
                    <ProjectItem
                        name="StereoFM"
                        previewClass="stereofm"
                        description={StereoFMDescription}
                        tags={StereoFMTags}
                        projectLink="https://stereo-fm.netlify.app/"
                        gitLink="https://github.com/zstrait/stereo-fm"
                    />
                    {/* <div className="content-spacer"></div>
                 <div className="content-spacer"></div> */}
                </div>
            </div>
        </>
    )
}


export default ProjectPage;