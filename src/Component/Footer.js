import React from 'react';
import {Link} from "react-router-dom";

function CreateTestText(){
    const text = [];

    for (let i = 1; i < 10; i++){
        text.push(<Link>`Information${i}`</Link>);
        }

    return(<p>{text}</p>)

}



function Footer() {

    return (
            <div className="footer-container base-content-container" id="footer">
                <div>
                    <p>Information3</p>
                    <p>Information2</p>
                    <p>Information2</p>
                </div>
                <div >
                    <p>Information2</p>
                    <p>Information2</p>
                    <p>Information2</p>
                </div>
                <div >
                    <p>Information2</p>
                    <p>Information2</p>
                    <p>Information2</p>
                </div>

                </div>
    );
}

export default Footer;