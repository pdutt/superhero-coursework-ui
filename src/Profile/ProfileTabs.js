import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileTab from './ProfileTab';

class ProfileTabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (profileTab) => {
        this.setState({ activeTab: profileTab });
    }

    render() {
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="profile-tabs">
                <ol className="profile-tab-list">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <ProfileTab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="profile-tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default ProfileTabs;