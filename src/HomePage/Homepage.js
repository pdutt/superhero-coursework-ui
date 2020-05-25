import React from 'react';
import logo from '../Images/logo.svg';

function Homepage() {
    return (
                <div label="Homepage">
                    <div className="Homepage">
                        <header className="Homepage-header">
                            <img src={logo} className="Homepage-logo" alt="logo"  />
                            <p>
                                Superhero Coursework Homepage
                            </p>
                        </header>
                    </div>
                </div>
    );
}

export default Homepage;