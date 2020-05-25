import React from 'react';
import logo from '../Images/logo.svg';

function Homepage() {
    return (
                <div label="Homepage">
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"  />
                            <p>
                                Superhero Coursework Homepage
                            </p>
                        </header>
                    </div>
                </div>
    );
}

export default Homepage;