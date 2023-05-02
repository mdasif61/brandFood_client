import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext=createContext(null)
const auth=getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    const googleLogin=(googleProvider)=>{
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogin=()=>{
        return signInWithPopup(auth,githubProvider)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const info={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;