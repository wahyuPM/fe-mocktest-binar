import React from "react";

const Card = ({ children, className }) => {
    return (
        <div className={`${className} + bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl`}>
            {children}
        </div>
    )
}
export default Card;