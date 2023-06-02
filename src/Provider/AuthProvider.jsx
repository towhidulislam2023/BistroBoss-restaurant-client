import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthProviderContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(true)
    const signupuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInuser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        signOut(auth)
    }
    const updateUserinfo = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photourl
        })
    }
    const handelGoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {
        user,
        signupuser,
        logInuser,
        logout,
        updateUserinfo,
        handelGoogleLogin,
        loading

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                axios.post("http://localhost:5000/jwt",{email:currentUser.email})
                .then(data=>{
                    localStorage.setItem("Token",data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem("Token")
                // setLoading(false)
            }
        })
        return () => {
            return unsubscribe
        }
    }, [])
    return (
        <AuthProviderContext.Provider value={authInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;