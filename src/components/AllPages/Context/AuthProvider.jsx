import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

// Create AuthContext
export const AuthContext=createContext(null)
const auth=getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    // create user new start
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // create user new end

    // login user start
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    // login user end

    // signOut user start
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
    // signOut user end

    // login user with google
    const googleLogin=(googleProvider)=>{
        return signInWithPopup(auth,googleProvider)
    }
    // login user with github
    const githubLogin=(githubProvider)=>{
        return signInWithPopup(auth,githubProvider)
    }

    // show profile navbar
    const profile=(user,photo,name)=>{
       return updateProfile(user,{
        displayName:name,
        photoURL:photo
       })
    }

    // currently create user info observer 
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    // pass all function and info  
    const info={
        user,
        createUser,
        signIn,
        logOut,
        loading,
        googleLogin,
        githubLogin,
        profile
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;