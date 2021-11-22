import React from 'react';
import {unstable_renderSubtreeIntoContainer} from "react-dom";


function Header() {
    return (

        <div className="header-container">

            <div className="header-items">
                <div className="base-content-container">
                    <div className="title">Guide to school survival</div>

                <div className="other-menu">

                        <div  className="menu-item" >Home</div>
                        <div  className="menu-item" >Substance</div>
                        <div  className="menu-item" >Our Work</div>
                        <div  className="menu-item" >Send us a massage</div>
                </div>


                <button className="inverted">Information</button>

                </div>


            </div>


        </div>


    );
}

export default Header;