import React, {Component} from 'react';
import './App.css';
import Tabs from './Tabs/Tabs';
import Homepage from "./HomePage/Homepage";
import Profile from "./Profile/Profile"
import Curriculum from "./Curriculum/Curriculum";
require('./Tabs/styles.css');
require('./HomePage/Homepage.css');
require('./Profile/Profile.css')

class App extends Component{
  render() {
      return (
          <div>
              <Tabs>
                  <div label="Home">
                      <Homepage/>
                  </div>
                  <div label="Profile">
                      <Profile/>
                  </div>
                  <div label="Content">
                      <Curriculum/>
                  </div>
              </Tabs>
          </div>
      )
  }
}

export default App;
