import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/auth-context";

import Card from "../../components/UI/Card/Index";
import { toast } from 'react-toastify';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const base_url = process.env.REACT_APP_API_HOST;
        const url = `${base_url}/auth/login`;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = 'Authentication failed!';
                    throw new Error(errorMessage);
                });
            }
        }).then((data) => {
            if (data.status === 'OK') {
                authCtx.login(data.result.access_token);
                toast.success(
                    `Login ${data.status}`
                );
                navigate('/dashboard');
            } else {
                toast.error(`${data.error.msg}`);
            }
        }).catch((err) => {
            alert(err.message);
            toast.error('Login Failed');
        })
    }

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }
    return (
        <div className="container mx-auto">
            <div className="flex flex-col h-full justify-center items-center">
                <h1 className="text-3xl font-semibold my-6">Login</h1>
                <Card className={"w-[35%]"}>
                    <form onSubmit={submitHandler} className="mt-4">
                        <div className="mx-auto max-w-lg">
                            <div className="py-2">
                                <input ref={emailInputRef}
                                    placeholder="Email"
                                    type="email"
                                    className="text-base text-[#868686] block px-3 py-2 rounded-lg         w-full bg-white border-2 border-gray-300 placeholder-[#868686]     shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                            </div>
                            <div className="py-2">
                                <div className="relative">
                                    <input ref={passwordInputRef}
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
                            <div className="flex justify-end">
                                <label className="block text-gray-500 font-light my-4"
                                ><button
                                    href=""
                                    className="cursor-pointer tracking-tighter text-sm text-[#730C07 hover:text-[#c0372f] no-underline">
                                        <span>Forgot Password?</span>
                                    </button>
                                </label>
                            </div>
                            <button
                                className="mt-3 text-lg font-semibold bg-[#EB3F36] w-full text-white        rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-[#cf2c23]"
                            >
                                Login
                            </button>
                        </div >
                    </form>

                </Card>
                <div className="flex justify-center my-6">
                    <span className="text-base text-[#868686]"
                    >Don't have an account? &nbsp;
                        <button
                            to="register"
                            className="text-[#730C07] hover:text-[#c0372f] font-bold"
                        >
                            <Link to="/register">Register</Link>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Login;