import Socialsbutton from "./SocialsButton";

function HeaderButtons() {

    return (
        <>
            <div className="header-buttons-container">
                <Socialsbutton />
                <a href="https://zander.zone/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="resume-button header-button"></button>
                </a>
            </div>
        </>
    )
}

export default HeaderButtons;