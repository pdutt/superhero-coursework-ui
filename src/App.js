import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs';
require('./styles.css');

function App() {
  return (
      <div>
        <Tabs>
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
          <div label="Profile">
            This will soon be populated with profiles!
          </div>
          <div label="Content">
            This will soon be populated with content!
          </div>
        </Tabs>
      </div>
  );
}

export default App;
