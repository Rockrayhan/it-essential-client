import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut, onAuthStateChanged , signInWithEmailAndPassword, updateProfile   } from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase =() => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true) ;

    const auth = getAuth();

    const registerUser= (email, password, name ,navigate)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const newUser = {email, displayName: name} ;
            setUser(newUser);

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
            navigate.replace('/');

            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          })
          .finally( ()=> setIsLoading(false));
    }


const loginUser = (email, password, location, navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const destination = location?.state?.from || '/' ;
      navigate.replace(destination) ;

      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    .finally( ()=> setIsLoading(false));
  
}



// user observer
    useEffect( ()=>{
       const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false) ;
          });
          return () => unSubscribe ;
    }  ,[])




    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally( ()=> setIsLoading(false));
    }
    return {
        user,
        isLoading,
        registerUser,
        logOut,
        loginUser,
    }

}

export default useFirebase;