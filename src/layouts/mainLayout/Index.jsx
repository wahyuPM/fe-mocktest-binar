import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div className="relative mx-auto w-full h-screen overflow-hidden 2xl:w-[1440px] flex bg-white">
            {children}
        </div>
    )
}
export default MainLayout;