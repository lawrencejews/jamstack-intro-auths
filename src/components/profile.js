import React from 'react';
import { Link } from 'gatsby'

const Profile = () => {
    return (
        <div className="dashboard-header">
            <nav>
                <Link to="/dashboard/secret" activeClassName="active">Secret Stuff</Link>
                <Link to="/dashboard/base" activeClassName="active">See You Base</Link>
            </nav>
            <span>TODO: Show login status</span>
        </div>
    )
}

export default Profile;