import React from 'react';
import {createContext}  from 'react';
import {useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const [user, setUser] = useState(null);

    const userInfo = {
        user,
        createUser
    }
   
    return (
       <AuthContext.Provider value = {userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;