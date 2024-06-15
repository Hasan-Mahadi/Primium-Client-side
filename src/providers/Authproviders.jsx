import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);




const Authproviders = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    // const axiosPublic = useAxiosPublic();


    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setloading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const logout = () => {
        setloading(true);
        return signOut(auth);

    }

    //updateuserprofile

    const updateuserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });



    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser);
            console.log('current user', currentuser);
            setloading(false);

        });
        return () => {
            return unsubscribe();
        }




    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logout,
        updateuserProfile,


    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}


        </AuthContext.Provider>
    )
};

export default Authproviders;