import React, { children, createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user , setUser] = useState(null); 
    const [loading, setLoading]= useState(true);

    const createUser = (email, passsword) =>{
        return createUserWithEmailAndPassword(auth, email, passsword);
    }

    const signIn = (email, passsword) =>{
        return signInWithEmailAndPassword(auth, email, passsword);
    }

    const logOut =() =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('auth state change ', currentUser);
            setUser(currentUser);
            setLoading(false)

        });

        return ()=> {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProviders;