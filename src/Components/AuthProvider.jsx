import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    };
    const logoutUser =  () => {
        setLoading(true);
        return signOut(auth)
    };
    const updateUserProfile = updateData => {
        return setLoading(true);
        updateProfile(auth.currentUser, updateData);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, []);
    const authInformation = {
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        user
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;