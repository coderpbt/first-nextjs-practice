import Link from 'next/link';
import React from 'react';

const ProfileNav = () => {
    return (
        <div className="main-menu">
            <ul>
                <li><Link href="/profile/orderhistory">Order history</Link></li>
                <li><Link href="/profile/editprofile">Edit profile</Link></li>
            </ul>
        </div>
    );
};

export default ProfileNav;