import React from 'react';
import {unstable_renderSubtreeIntoContainer} from "react-dom";
import {Link} from "react-router-dom";
import {motion} from 'framer-motion'



function Header() {
    return (

        <div className="header-container">

            <div className="header-items">

                    <Link to={"/"} className="title"><motion.div className="title" initial={{x: "-100vw"}} animate={{x: 0}} transition={{delay: 1, type: "spring", stiffness: 1000}}>Guide to school survival</motion.div></Link>
                <motion.div className="other-menu" initial={{opacity: 0}} animate={{opacity: 1}}>
                        <Link to="/"><div  className="menu-item" >Home</div></Link>
                        <Link to="substance"><div  className="menu-item" >Substance</div></Link>
                        <Link to="our-work"><div  className="menu-item" >Our Work</div></Link>
                        <Link to="send-us-a-message"><div  className="menu-item" >Send us a massage</div></Link>
                </motion.div>

                <div className="button-container">
                    <motion.button className="inverted" initial={{opacity: 0}} animate={{opacity:1}}>Information</motion.button>
                </div>
            </div>


        </div>


    );
}

export default Header;