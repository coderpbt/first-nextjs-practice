import ContainerBlock from '@/components/ContainerBlock';
import Profile from '@/components/Profile/Profile';
import React from 'react';

const index = () => {
    return (
        <ContainerBlock 
            title='Profile'
            description='User Profile'
        >
           <Profile /> 
        </ContainerBlock>
    );
};

export default index;