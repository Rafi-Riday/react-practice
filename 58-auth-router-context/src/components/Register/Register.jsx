import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UseContext';
import { FaGoogle } from 'react-icons/fa';
// ***
import { useForm } from 'react-hook-form';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { setLoading, createUser, updateUser, signInGoogle } = useContext(AuthContext);
    // ***
    const { register, handleSubmit, formState: { errors } } = useForm();

    const googleSignIn = () => {
        signInGoogle()
            .then(res => {
                const { user } = res;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                alert(err.message);
                console.error(err);
            })
    };

    const submitForm = data => {
        const { name, imageURL, email, password } = data;

        createUser(email, password)
            .then(res => {
                const { user } = res;
                updateUser(name, imageURL)
                    .then(() => { setLoading(false) })
                    .catch(err => {
                        alert(err.message);
                        console.error(err);
                    })
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                alert(7, err.message);
                console.error(err);
            })
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body gap-4">
                            <form onSubmit={handleSubmit(data => submitForm(data))}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input className="input input-bordered" type="text" placeholder="name" {...register("name", { required: true })} />
                                    {
                                        errors.name?.type === 'required' && <p className='text-error px-2 mt-2' role="alert">Name is required</p>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input className="input input-bordered" type="text" placeholder="image url" {...register("imageURL")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input className="input input-bordered" type="email" placeholder="email" {...register("email", { required: true })} />
                                    {
                                        errors.email?.type === 'required' && <p className='text-error px-2 mt-2' role="alert">Email is required</p>
                                    }
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input className="input input-bordered" type="password" placeholder="password" {...register("password", { required: true, minLength: 6 })} />
                                    {
                                        errors.password?.type === 'required' && <p className='text-error px-2 mt-2' role="alert">Password is required</p>
                                    }
                                    {
                                        errors.password?.type === 'minLength' && <p className='text-error px-2 mt-2' role="alert">Password length is less than 6 </p>
                                    }
                                    <label className="label">
                                        <Link to='/login' className="label-text-alt link link-hover">Already have an Account? <u>Login</u></Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-secondary" type="submit" />
                                </div>
                            </form>
                            <button onClick={googleSignIn} className="btn btn-success btn-outline"><FaGoogle />&nbsp;&nbsp;&nbsp;Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
