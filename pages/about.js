import AboutMe from '@/components/AboutMe';
import ContainerBlock from '@/components/ContainerBlock';
import React from 'react';

const about = () => {
    return (
        <ContainerBlock
            title="FrontEnd Dev"
            description="FrontEnd Dev from Bangladesh"
        >
            <AboutMe />
        </ContainerBlock>
    );
};

export default about;