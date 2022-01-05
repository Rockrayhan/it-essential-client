import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const newUser = { email, displayName: name };
        setUser(newUser);

        // save user to DB
        saveUser(email, name);

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        navigate('/');

        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => setIsLoading(false));
  }


  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const destination = location?.state?.from || '/';
        navigate(destination);

        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));

  }



  // user observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [])


  useEffect(() => {
      fetch(`https://mysterious-scrubland-98995.herokuapp.com/users/${user.email}`)
      .then (res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));
  }


  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch('https://mysterious-scrubland-98995.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }


  return {
    user,
    admin,
    isLoading,
    registerUser,
    logOut,
    loginUser,
  }

}

export default useFirebase;