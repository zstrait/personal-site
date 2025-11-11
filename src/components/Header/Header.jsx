import Socialsbutton from "./SocialsButton";

function Header() {

    return (
        <>
            <header className="header">
                <div className="left-header">
                    <Socialsbutton />
                    <button className="resume-button header-button"></button>
                </div>
                <a href="mailto:zanderstrait@gmail.com?subject=Reaching%20Out%20from%20your%20Website"
                    className="mail-button header-button"></a>
            </header>
        </>
    )
}

export default Header;