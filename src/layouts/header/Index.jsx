import React, { useContext } from "react";
import AuthContext from '../../context/auth-context';

const Header = () => {
    const authCtx = useContext(AuthContext);

    const handleLogout = (event) => {
        event.preventDefault();
        authCtx.logout();
    }
    return (
        <div className="fixed top-0 w-full bg-slate-100 z-10 shadow-md">
            <div className="container mx-auto">
                <div className="flex w-full justify-between items-center py-8">
                    <div className="flex w-auto gap-5 justify-center items-center">
                        <h3 className="text-lg font-bold whitespace-nowrap">Product List</h3>
                        <button className="p-3 text-lg font-semibold bg-[#EB3F36] w-full text-white  rounded-xl block shadow-xl hover:text-white hover:bg-[#cf2c23]">Create New</button>
                    </div>
                    <div className="block">
                        <button onClick={handleLogout} className="text-lg cursor-pointer tracking-tighter text-[#730C07 hover:text-[#c0372f] no-underline">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;