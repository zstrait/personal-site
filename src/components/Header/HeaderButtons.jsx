import Socialsbutton from "./SocialsButton";

function HeaderButtons() {

    return (
        <>
            <div className="header-buttons-container">
                <Socialsbutton />
                <a href="/resume.pdf" target="_blank">
                    <button className="resume-button header-button"></button>
                </a>
            </div>
        </>
    )
}

export default HeaderButtons;