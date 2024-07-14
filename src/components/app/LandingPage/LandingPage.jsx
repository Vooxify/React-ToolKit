// global imports

import Logo from "../../graphics/Logo";
import App, { AppContext } from "../../../App";

// react
import { Link } from "react-router-dom";
import { useContext } from "react";

// style sheet
import "./LandingPage.css"

export default function LandingPage() {

    const { toggleTheme } = useContext(AppContext);
    
    return(
        <div className="landing-page">
            <section id="top-section">
                <div className="navigation-bar">
                    <div className="page-logo">
                        <Logo />
                    </div>
                    <div className="piece">
                        <Link className="links">Tool 1</Link>
                        <Link className="links">Tool 2</Link>
                        <Link className="links">Tool 3</Link>
                        <Link className="links">Tool 4</Link>
                        <Link className="links">Tool 5</Link>
                    </div>
                    <div className="change-theme">
                        <button onClick={toggleTheme}></button>
                    </div>
                </div>
            </section>
        </div>
    )
}
