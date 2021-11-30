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
                  <h3>QUICK LINKS</h3>
                  <p>Search</p>
                  <p>Contact</p>
                  <p>About Us</p>
                  <p>News</p>
                  <p>FAQ</p>
                </div>
                <div >
                    <h3>GET IN TOUCH</h3>
                    <p>Sign up to stay in the loop. Receive updates, access to exclusive deals, and more.</p>
                </div>
                <div>
                  <h3>NEWSLETTER</h3>

                    <div className="newsletter-box">
                        <input type="email" placeholder="Email"/>
                        <button className="footer-button">SIGN UP</button>
                    </div>
                </div>

                </div>
    );
}

export default Footer;