import React, { useState } from 'react';
import firebaseApp from './firebase/firebase.init';
import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// import { GoogleAuthProvider, } from 'firebase/auth';

const auth = getAuth(firebaseApp);

const App = () => {

  // google sign in
  // const [googleUser, setGoogleUser] = useState(null);
  // const googleAuthProvider = new GoogleAuthProvider();
  // const googleSignIn = () => {
  //   signInWithPopup(auth, googleAuthProvider)
  //     .then(result => {
  //       const { user } = result;
  //       setGoogleUser(user);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // };

  // github sign in
  const [githubUser, setGithubUser] = useState(null);
  const githubAuthProvider = new GithubAuthProvider();
  const githubSignIn = () => {
    signInWithPopup(auth, githubAuthProvider)
      .then(result => {
        const { user } = result;
        setGithubUser(user);
      })
      .catch(err => {
        console.error(err);
      })
  };

  // sign out
  const allSignOut = () => {
    signOut(auth)
      .then(result => {
        // setGoogleUser(null);
        setGithubUser(null);
      })
      .catch(err => {
        console.error(err);
      })
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', }}>
        {/* {
          googleUser?.uid ?
            <>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem', }}>
                <button onClick={allSignOut}>Sign Out</button>
                <img style={{ width: '10rem', borderRadius: '50%', }} src={googleUser.photoURL} alt={googleUser.displayName} />
                <h3 style={{ marginTop: '0', marginBottom: '0', }}>
                  {googleUser.displayName}
                </h3>
                <p style={{ marginTop: '0', marginBottom: '0', }}>
                  {googleUser?.email && `Email : ${googleUser.email}`}
                </p>
              </div>
            </>
            :
            <>
              <button onClick={googleSignIn}>Google Sign In</button>
            </>
        } */}
        {
          githubUser?.uid ?
            <>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem', }}>
                <button onClick={allSignOut}>Sign Out</button>
                <img style={{ width: '10rem', borderRadius: '50%', }} src={githubUser.photoURL} alt={githubUser.displayName} />
                <h3 style={{ marginTop: '0', marginBottom: '0', }}>
                  {githubUser.displayName}
                </h3>
                <p style={{ marginTop: '0', marginBottom: '0', }}>
                  {githubUser?.email && `Email : ${githubUser.email}`}
                </p>
              </div>
            </>
            :
            <>
              <button onClick={githubSignIn}>Github Sign In</button>
            </>
        }
      </div>
    </div>
  );
};

export default App;