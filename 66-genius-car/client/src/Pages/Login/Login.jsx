import React from 'react';
import { Link } from 'react-router-dom';
import LoginImg from '../../assets/images/login/login.svg';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
    };
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <img className='w-full' src={LoginImg} alt="Login Image" />
                </div>
                <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="">
                                <span>New to Genius Car?&nbsp;&nbsp;<Link to="/signup" className="link link-hover text-base font-semibold text-red-500">Sign Up</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;