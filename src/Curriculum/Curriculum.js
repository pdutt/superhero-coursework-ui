import React from 'react';
import './Curriculum.css';
import logo from "../logo.svg";

function Curriculum() {
    return (
        <div className="Curriculum">
            <header className="Curriculum-header">
                <img src={logo} className="Curriculum-logo" alt="logo" />
                <p>
                    Superhero Coursework Curriculum Page.
                </p>
            </header>
        </div>
    );
}

export default Curriculum;