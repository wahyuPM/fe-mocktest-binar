import React, { useState } from "react";
import Card from "../../components/UI/Card/Index";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className="container mx-auto">
            <div className="flex flex-col h-full justify-center items-center">
                <h1 className="text-3xl font-semibold my-6">Register</h1>
                <Card className={"w-[35%]"}>
                    <form className="mt-4">
                        <div className="mx-auto max-w-lg">
                            <div className="py-2">
                                <input
                                    placeholder="Name"
                                    type="text"
                                    className="text-base text-[#868686] block px-3 py-2 rounded-lg         w-full bg-white border-2 border-gray-300 placeholder-[#868686]     shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                            </div>
                            <div className="py-2">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    className="text-base text-[#868686] block px-3 py-2 rounded-lg         w-full bg-white border-2 border-gray-300 placeholder-[#868686]     shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                            </div>
                            <div className="py-2">
                                <div className="relative">
                                    <input
                                        placeholder="Password"
                                        className="text-base text-[#868686] block px-3 py-2           rounded-lg w-full bg-white  border-2 border-gray-300 placeholder-[#868686] shadow-md focus:placeholder-gray-500 focus:bg-white    focus:border-gray-600 focus:outline-none"
                                        type={!showPassword ? 'password' : 'text'} />
                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                    >
                                        <button
                                            onClick={handleShowPassword}
                                            type="button"
                                            className="text-[#730C07]"
                                        >
                                            {!showPassword ? "Show" : "Hide"}
                                        </button>
                                    </div>
                                </div>
                            </div >
                            <button
                                className="mt-3 text-lg font-semibold bg-[#EB3F36] w-full text-white        rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-[#cf2c23]"
                            >
                                Register
                            </button>
                        </div >
                    </form>
                </Card>
                <div class="flex justify-center my-6">
                    <span class="text-base text-[#868686]"
                    >Already have an account? &nbsp;
                        <button
                            class="text-[#730C07] hover:text-[#c0372f] font-bold"
                        >
                            <Link to="/">Login</Link>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register;