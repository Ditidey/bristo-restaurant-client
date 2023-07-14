import React, { createContext, useEffect, useState } from 'react';
import { app } from './firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
// import axios from 'axios';

export const contextProvider = createContext();
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const userUpdate = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            // if (currentUser) {
            //     axios.post('https://bristo-restaurant-server.vercel.app/jwt', { email: currentUser.email })
            //         .then(data => {
            //             console.log(data)
            //             localStorage.setItem('access-token', data.data.token);
            //             setLoading(false)
            //         }
            //         )

            // }
            // else {
            //     localStorage.removeItem('access-token')
            //     setLoading(false)
            // }
             
        });
        return () => {
            return unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        userUpdate,
        googleLogin,
    }
    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default Authprovider;