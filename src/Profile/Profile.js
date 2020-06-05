import React, {Component} from 'react';
import ProfileTabs from './ProfileTabs'
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