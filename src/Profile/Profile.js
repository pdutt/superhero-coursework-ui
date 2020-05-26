import React, {Component} from 'react';
import logo from '../Images/logo.svg';
import ProfileTabs from './ProfileTabs'
import Table from '../Shared/Table'
require('./ProfileTabs.css');


class Profile extends Component{
    render() {
    return (
          <div>
            <ProfileTabs className = "Profile-Tabs-header">
              <div label="Edit Profile">
              </div>
              <div label="Membership">
                This will soon be populated with membership information.
              </div>
              <div label="Curriculum Plan">
                This will soon be populated with curriculum options!
              </div>
            </ProfileTabs>
          </div>

      )
      }
}

export default Profile;