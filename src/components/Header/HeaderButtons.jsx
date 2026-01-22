import Socialsbutton from "./SocialsButton";

function HeaderButtons() {

    return (
        <>
            <div className="header-buttons-container">
                <Socialsbutton />
                <a className="resume-button header-button" href="https://zander.zone/resume.pdf" target="_blank" reloadDocument></a>
            </div>
        </>
    )
}

export default HeaderButtons;