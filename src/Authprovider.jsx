import React, { createContext, useEffect, useState } from 'react';
import { app } from './firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

export const contextProvider = createContext();
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

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
    const userUpdate = (name, photoURL) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photoURL})
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
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
    }
    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default Authprovider;