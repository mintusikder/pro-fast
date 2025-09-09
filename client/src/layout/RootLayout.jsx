import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default RootLayout;