import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SignUpImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../AuthProvider';

const SignUp = () => {
    const { signUpUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const { email: { value: email }, password: { value: password } } = event.target;
        signUpUser(email, password)
            .then(res => console.log(res.user))
            .catch(err => console.error(err))
    };
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <img className='w-full' src={SignUpImg} alt="Login Image" />
                </div>
                <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="full name" name="fullName" className="input input-bordered" required />
                        </div>
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
                                <span>Already in Genius Car?&nbsp;&nbsp;<Link to="/login" className="link link-hover text-base font-semibold text-red-500">Log In</Link></span>
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

export default SignUp;