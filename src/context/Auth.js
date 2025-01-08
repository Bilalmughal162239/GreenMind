import React, { createContext, useEffect, useState, useContext, useCallback } from 'react'
import { auth, firestore } from '../Config/firsbase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
const AuthContext = createContext()
const initialState = { isAuth: false, user: {} }
const AuthProvider = ({ children }) => {
    const [state, setState] = useState(initialState)
    const [isAppLoading, setIsAppLoading] = useState(true)

    const readProfile = useCallback(async (user) => {
        const docRef = doc(firestore, "users", user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
        //   console.log("Document data:", docSnap.data());
        // console.log('FireFoter User Data', user)
          const user = docSnap.data()
          setState(s => ({ ...s, isAuth: true, user }));
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
        setIsAppLoading(false)
    }, [])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                readProfile(user)
                //   console.log('Authuser Data', user)
            } else {
                //  console.log("User is Logout")
                 setIsAppLoading(false) 
            }
        });
    }, [readProfile])
    const handlelogout = () => {
        signOut(auth)
            .then(() => {
                window.notify("User Successfully logout", "success")
            })
            .catch(() => {
                window.notify("Something went wrong while logout the user", "error")
                // console.error(erro)
            })
    }
    return (
        <AuthContext.Provider value={{ ...state, setAuthState: setState, handlelogout, isAppLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider