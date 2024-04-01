import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }  

    
    //observe auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current value of the current user', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser, 
        signInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
AuthProviders.propTypes = {
    children: PropTypes.node
}
//note:
//1.Create context with export
//2.set provider with value
//3.use the AuthProviders in the main.jsx file.
//4.use/access children in the AuthProvider component as children and use it in the middle of the AuthContext.
