import React from 'react';
import {Link} from "react-router-dom";

function SendUsAMessage(props) {
    return (
        <div className="content-container base-content-container">

            <div className="connection-left-menu-container">
                <div className="connection-container">
                    <header>Connections</header>
                        <ul>
                            <li><Link to=""><i className="fas fa-qrcode">dfgdf</i></Link></li>
                            <li><Link to=""><i className="fas fa-bug">dfgdf</i></Link></li>
                            <li><Link to=""><i className="fas fa-envelope">dfgdf</i></Link></li>
                            <li><Link to=""><i className="fas fa-comment-alt">dfgdf</i></Link></li>
                            <li><Link to=""><i className="fas fa-question-circle">dfgdf</i></Link></li>
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