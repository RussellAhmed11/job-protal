
import { useEffect, useState } from 'react';
import AuthContex from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.config';

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
useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
    console.log('state captaure',currentUser)
       setUsers(currentUser);
       setLoading(false);
    })
    return ()=>unSubscribe();
},[])
    const authInfo = {
        user, setUsers, loading, setLoading,createUser,signInUser,signOutUser
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;