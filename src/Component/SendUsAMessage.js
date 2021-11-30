import React from 'react';
import {Link} from "react-router-dom";

function SendUsAMessage(props) {
    return (
        <div className="content-container base-content-container">

            <div className="connection-left-menu-container">
                <div className="connection-container">
                    <header>Connections</header>
                        <ul className="all-icons">
                            <li><Link to=""><i className="fas fa-qrcode">sdfsd</i></Link></li>
                            <li><Link to=""><i className="fas fa-bug">Report Bug</i></Link></li>
                            <li><Link to=""><i className="fas fa-envelope">Send message</i></Link></li>
                            <li><Link to=""><i className="fas fa-comment-alt">Community</i></Link></li>
                            <li><Link to=""><i className="fas fa-question-circle">Information this section</i></Link></li>
                        </ul>
                    </div>
                </div>
            <div className="connection-right-menu-container">
                <div className="content"/>
            </div>

        </div>
    );
}

export default SendUsAMessage;