import React, {Component} from 'react';
import './App.css';
import Tabs from './Tabs/Tabs';
import Homepage from "./HomePage/Homepage";
require('./Tabs/styles.css');
require('./HomePage/Homepage.css');

function App () {
  return (
      <div>
        <Tabs>
          <div label="Home">
              <Homepage/>
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
