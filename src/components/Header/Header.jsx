import Socialsbutton from "./SocialsButton";

function Header() {

    return (
        <>
            <header className="header">
                <div className="left-header">
                    <Socialsbutton />
                    <button className="resume-button header-button"></button>
                </div>
                <button className="mail-button header-button"></button>
            </header>
        </>
    )
}

export default Header;