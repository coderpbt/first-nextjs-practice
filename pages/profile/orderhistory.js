import ContainerBlock from '@/components/ContainerBlock';
import OrderHistory from '@/components/Profile/OrderHistory/OrderHistory';
import Profile from '@/components/Profile/Profile';
import React from 'react';

const orderhistory = () => {
    return (
        <ContainerBlock>
            <Profile>
              <OrderHistory />
            </Profile>
        </ContainerBlock>
    );
};

export default orderhistory;