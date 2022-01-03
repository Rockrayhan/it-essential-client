import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut, onAuthStateChanged , signInWithEmailAndPassword, updateProfile   } from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase =() => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true) ;

    const auth = getAuth();

    const registerUser= (email, password)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
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


const loginUser = (email, password) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
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