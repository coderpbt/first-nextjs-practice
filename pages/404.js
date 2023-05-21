import Link from 'next/link';
import React from 'react';

const Custom404 = () => {
    return (
        <div className='not-fount'>
            <h2>404 - Page Not Found</h2>
            <Link href="/">Back To Home</Link>
        </div>
    );
};

export default Custom404;