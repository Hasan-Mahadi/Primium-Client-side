import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);




const Authproviders = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);


    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }


    const signIn = (email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(email,password);
    }


    const logout = () =>{
        setloading(true);
        return signOut(auth);
    
    }


    useEffect(() =>{
     const unsubscribe =    onAuthStateChanged(auth, currentuser => {
            setuser(currentuser);
            console.log('current user', currentuser);
            setloading(false);
        });

        return () => {
            return unsubscribe();
        }
    },[]);

        const authInfo = {
            user,
            loading,
            createUser,
            signIn,
            logout

    }


    return(
        <AuthContext.Provider value={authInfo}>
            {children}


        </AuthContext.Provider>
    )
};

export default Authproviders;