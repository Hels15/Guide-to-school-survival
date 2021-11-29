import React from 'react';
import {unstable_renderSubtreeIntoContainer} from "react-dom";
import {Link} from "react-router-dom";

function Header() {
    return (

        <div className="header-container">

            <div className="header-items">

                    <div className="title">Guide to school survival</div>
                <div className="other-menu">
                        <Link to="/"><div  className="menu-item" >Home</div></Link>
                        <Link to="substance"><div  className="menu-item" >Substance</div></Link>
                        <Link to="our-work"><div  className="menu-item" >Our Work</div></Link>
                        <Link to="send-us-a-message"><div  className="menu-item" >Send us a massage</div></Link>
                </div>

                <div className="button-container">
                    <button className="inverted">Information</button>
                </div>

            </div>


        </div>


    );
}

export default Header;