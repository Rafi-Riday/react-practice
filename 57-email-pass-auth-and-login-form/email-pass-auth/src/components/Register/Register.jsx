import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import FirebaseApp from '../../firebase/firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(FirebaseApp);

const Register = () => {

    const [regExError, setRegExError] = useState({ userName: '', email: '', pass: '', success: false, firebaseErr: '', });

    const flexColCenter = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        margin: '0.5rem auto 0.5rem',
        maxWidth: '300px',
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { userName: { value: userName }, email: { value: email }, password: { value: password }, } = e.target;
        if (!/(?=.*[a-zA-Z])/.test(userName)) {
            setRegExError({ ...regExError, userName: 'Please insert at least 1 "a-z" or "A-Z" letter.', });
            return;
        } else {
            setRegExError({ ...regExError, userName: '', });
        }
        //
        try {
            const emailA = email.split('@');
            const emailA2nd = emailA[emailA.length - 1];
            const emailDot = emailA2nd.split('.');
            const emailDot2nd = emailDot[emailDot.length - 1];
            if (emailDot2nd.length < 2) {
                setRegExError({ ...regExError, email: 'Please insert a proper format.', });
                return;
            } else {
                setRegExError({ ...regExError, email: '', });
            }
        } catch (err) {
            setRegExError({ ...regExError, email: 'Please insert a proper format.', });
            return;
        }
        if (password.length < 6) {
            setRegExError({ ...regExError, pass: 'Please insert at least 6 letters', });
            return;
        } else {
            setRegExError({ ...regExError, pass: '', });
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setRegExError({ userName: '', email: '', pass: '', success: true, });
                e.target.reset();
                const { user } = res;
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: userName,
                })
                    .then(() => { })
                    .catch(err => {
                        setRegExError({ userName: '', email: '', pass: '', firebaseErr: err.message, success: false, });
                    })
                sendEmailVerification(auth.currentUser)
                    .then(() => alert('Please check your email to verify. Check spam if you can not find in inbox'))
            })
            .catch(err => {
                setRegExError({ userName: '', email: '', pass: '', firebaseErr: err.message, success: false, });
            });
    };

    const handleInputChange = e => {
    };

    return (
        <div style={flexColCenter}>
            <h2 style={{ textAlign: 'center' }}>Register</h2>
            <form style={{ ...flexColCenter, alignItems: 'start', }} onSubmit={handleSubmit}>
                <div style={flexColCenter} >
                    <label htmlFor="userName">User Name</label>
                    <input onBlur={handleInputChange} type="text" name="userName" placeholder="Enter user name" required />
                    {
                        regExError.userName && <div style={{ color: 'red', }}>{regExError.userName}</div>
                    }
                </div>
                <div style={flexColCenter} >
                    <label htmlFor="email">Email address</label>
                    <input onBlur={handleInputChange} type="email" name="email" placeholder="Enter email" required />
                    {
                        regExError.email && <div style={{ color: 'red', }}>{regExError.email}</div>
                    }
                </div>
                <div style={flexColCenter}>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handleInputChange} type="password" name="password" placeholder="Password" required />
                    {
                        regExError.pass && <div style={{ color: 'red', }}>{regExError.pass}</div>
                    }
                    {
                        regExError.success && <div style={{ color: 'blue', }}>User created successfully</div>
                    }
                    {
                        regExError.firebaseErr && <div style={{ color: 'red', }}>{regExError.firebaseErr}</div>
                    }
                </div>
                <div style={{ ...flexColCenter, alignItems: 'center', }}>
                    <button type="submit" >Submit</button>
                </div>
            </form>
            <div style={{ textAlign: 'center' }}>Already registered? <Link to='/login'>Login</Link></div>
        </div>
    );
};

export default Register;