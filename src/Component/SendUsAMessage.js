import React from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";

function SendUsAMessage(props) {
    return (
        <div className="content-container base-content-container">

            <div className="connection-left-menu-container">
                <div className="connection-container">
                    <header>Connections</header>
                        <ul className="all-icons">
                            <li><Link to="report-bug"><i className="fas fa-qrcode">sdfsd</i></Link></li>
                            <li><Link to="report-bug"><i className="fas fa-bug">Report Bug</i></Link></li>
                            <li><Link to="send-message"><i className="fas fa-envelope">Send message</i></Link></li>
                            <li><Link to="community"><i className="fas fa-comment-alt">Community</i></Link></li>
                            <li><Link to="what-is-this"><i className="fas fa-question-circle">What is this?</i></Link></li>
                        </ul>
                    </div>
                </div>
            <div className="connection-right-menu-container">
                <div className="content">
                    <Outlet/>
                </div>
            </div>

        </div>
    );
}

export default SendUsAMessage;