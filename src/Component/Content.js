import React from 'react';
import {motion} from "framer-motion";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

function Content() {
    return (
        <div className="content-container">

                         <div className="left-side-content">
                             <motion.div className="school-stress" initial={{x: "-100vw"}} animate={{x:0}} transition={{delay: 1.5, duration:1.5}}>HELP WITH SCHOOL STRESS</motion.div>
                              <motion.div className="look-around" initial={{x: "-100vw"}} animate={{x:0}} transition={{delay: 1.5}}><h1>Look around and <br/> use help</h1></motion.div>
                        </div>

                        <div className="right-side-content">
                            <div className="site-milestones">
                                SITE MILESTONES
                            </div>
                            <Button startIcon={<SaveIcon/>} variant="contained" color="primary">
                                More Information
                            </Button>
                        </div>

        </div>
    );
}

export default Content;