
import { useEffect, useState } from 'react';
import AuthContex from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.config';
const googleProvider=new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}
const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const signOutUser=()=>{
    setLoading(true)
    return signOut(auth)
}
const signInWithGoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
}
useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
    console.log('state captaure',currentUser)
       setUsers(currentUser);
       setLoading(false);
    })
    return ()=>unSubscribe();
},[])
    const authInfo = {
        user, setUsers, loading, setLoading,createUser,signInUser,signOutUser,signInWithGoogle
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;