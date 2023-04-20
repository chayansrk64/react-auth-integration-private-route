import React, { useEffect } from 'react';
import {createContext}  from 'react';
import {useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        return signOut(auth)
        
    }

    // Observer auth state change.

    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('State change', currentUser);
            setUser(currentUser)
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }

    }, [])

    

    const userInfo = {
        user,
        loading,
        createUser,
        userLogIn,
        signInWithGoogle,
        logOut
    }
   
    return (
       <AuthContext.Provider value = {userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;