import Image from 'next/image';
import React from 'react';
import project from '../../../images/projects.png'

const WebImage = () => {
    return (
        <div>
            <Image src={project} alt='This is project image' />
        </div>
    );
};

export default WebImage;