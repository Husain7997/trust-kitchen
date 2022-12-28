import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../../firebase/firebase.confige';

export const AuthContext=createContext();

const auth = getAuth(app);
// const googleProvider= new GoogleAuthProvider();
const AuthProvider = ({children}) => {

const [user, setUser]= useState(null);
const [loading, setLoading] = useState(true);


const googleLogin= (googleProvider)=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}

const creareUser=(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
}
const login=(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut=()=>{
    signOut(auth)
}

useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        console.log(currentUser);
        setLoading(false);
    },[]);
return()=>{
    return unsubscribe();
}
},[])

    const authInfo={
        user,
        loading,
        googleLogin,
        creareUser,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;