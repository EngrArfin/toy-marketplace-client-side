import React, { children, createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,  signOut} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null); 
    const [loading, setLoading]= useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, passsword) =>{
        return createUserWithEmailAndPassword(auth, email, passsword);
    }

    const signIn = (email, passsword) =>{
        return signInWithEmailAndPassword(auth, email, passsword);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    const logOut =() =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('current use in auth provider ', currentUser);
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
        googleSignIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProviders;