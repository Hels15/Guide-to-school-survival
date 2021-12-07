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
                  <Link to="" ><h3>QUICK LINKS</h3></Link>
                  <Link to="send-us-a-message"><p>Contact</p></Link>
                  <Link to="our-work"><p>About Us</p></Link>
                  <Link to="update"><p>News</p></Link>
                  <Link to="faq"><p>FAQ</p></Link>
                </div>
                <div>
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