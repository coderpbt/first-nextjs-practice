import ContainerBlock from '@/components/ContainerBlock';
import Edit from '@/components/Profile/Edit/Edit';
import Profile from '@/components/Profile/Profile';
import React from 'react';

const editprofile = () => {
    return (
        <ContainerBlock>
             <Profile>
                <Edit /> 
             </Profile>
        </ContainerBlock>
    );
};

export default editprofile;