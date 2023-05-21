import React from 'react';
import about from '../images/about.png'
import Image from 'next/image';

const AboutMe = () => {
    return (
        <div className='about-area'>
            <div className="container">
                <div className="about-content">
                    <h2>Web Developer</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, neque ut aspernatur vel cumque voluptatem eaque atque eveniet commodi, iste ea fuga laboriosam ipsum repudiandae eligendi, repellat dicta labore assumenda.</p>
                    <Image src={about} alt="Picture of the author" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;