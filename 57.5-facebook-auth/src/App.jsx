import React, { useState } from "react";
import { FacebookAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import FirebaseApp from "./firebase/firebase.init";

const auth = getAuth(FirebaseApp);

function App() {

  const [fbUser, setFbUser] = useState(null);

  const fbAuth = () => {
    const fbProvider = new FacebookAuthProvider();
    signInWithPopup(auth, fbProvider)
      .then(res => {
        const { user } = res; console.log(user);
        setFbUser(user);
      })
      .catch(err => console.error(err))
  }

  const allSignOut = () => {
    signOut(auth)
      .then(res => {
        setFbUser(null);
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      {
        fbUser?.uid ?
          <button onClick={allSignOut}>Log Out</button>
          :
          <button onClick={fbAuth}>Log In</button>
      }
    </div>
  )
}

export default App
