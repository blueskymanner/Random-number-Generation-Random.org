import React from "react";

function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <div className="logo">
                    <a href="#" className="active-img"> <b>Random Number Generator</b> </a>
                </div>
                <div className="button">
                    <a href="#" className="button"> Generate </a> 
                </div>
            </div>
        </div>
    );
}

export default Header;