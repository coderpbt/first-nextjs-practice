import React from 'react';
import ProfileNav from './ProfileNav';

const Profile = ({children}) => {
    return (
        <div>
           <div className='profile-grid'>
                <ProfileNav />
                {children}
             </div>
        </div>
    );
};

export default Profile;