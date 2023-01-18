import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import FirebaseApp from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(FirebaseApp);

const Login = () => {

    const [emailStr, setEmailStr] = useState('');

    const [regExError, setRegExError] = useState({ email: '', pass: '', success: false, firebaseErr: '', });

    const flexColCenter = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        margin: '0.5rem auto 0.5rem',
        maxWidth: '300px',
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { email: { value: email }, password: { value: password }, } = e.target;

        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                const { user } = res;
                console.log(user);
                setRegExError({ email: '', pass: '', firebaseErr: '', success: true, });
                e.target.reset();
            })
            .catch(err => {
                setRegExError({ email: '', pass: '', firebaseErr: err.message, success: false, });
            });
    };

    const resetPassword = () => {
        if (!emailStr) {
            alert('Please enter valid email address');
            return;
        }
        sendPasswordResetEmail(auth, emailStr)
            .then(() => alert('Password reset email sent!'))
            .catch(err => alert(err.message));
    };

    const handleEmailChange = e => {
        setEmailStr(e.target.value);
    };

    return (
        <div style={flexColCenter}>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <form style={{ ...flexColCenter, alignItems: 'start', }} onSubmit={handleSubmit}>
                <div style={flexColCenter} >
                    <label htmlFor="email">Email address</label>
                    <input onBlur={handleEmailChange} type="email" name="email" id="email" placeholder="Enter email" required />
                    {
                        regExError.email && <div style={{ color: 'red', }}>{regExError.email}</div>
                    }
                </div>
                <div style={flexColCenter}>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password" id="exampleInputPassword1" placeholder="Password" required />
                    {
                        regExError.pass && <div style={{ color: 'red', }}>{regExError.pass}</div>
                    }
                    {
                        regExError.success && <div style={{ color: 'blue', }}>User logged in successfully</div>
                    }
                    {
                        regExError.firebaseErr && <div style={{ color: 'red', }}>{regExError.firebaseErr}</div>
                    }
                </div>
                <div style={{ ...flexColCenter, alignItems: 'center', }}>
                    <button type="submit" >Submit</button>
                </div>
                <div style={{ textAlign: 'center' }}>Not registered? <Link to='/register'>Register</Link></div>
                <div style={{ textAlign: 'center' }}>Forgot password? <button style={{ background: '#0000', padding: '0', margin: '0', border: '0', }} onClick={resetPassword} type="submit" > <Link>Please Reset</Link></button></div>
            </form>
        </div>
    );
};

export default Login;