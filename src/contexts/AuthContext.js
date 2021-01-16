import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
const AuthContext = React.createContext()

//useAuth hook
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    //create user
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    //login function
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    //logout function
    function logout() {
        return auth.signOut()
    }

    //reset password
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
    // Update email
    function updateEmail(email) {
        return auth.currentUser.updateEmail(email)
    }
    // Update password
    function updatePassword(password) {
        return auth.currentUser.updatePassword(password)
    }
    //delete account
    function deleteAccount() {
        return auth.currentUser.delete()
    }
    //update displayname
    function updateDisplayName(userName) {
        return auth.currentUser.updateProfile({
            displayName: userName,
        })
    }

    //useEffect so you only run it when mounting component
    useEffect(() => {
        //firebase method to set current user
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            //no loading when there already is a user
            setLoading(false)
        })
        return unsubscribe
    }, [])

    //Export
    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        deleteAccount,
        updateDisplayName,
    }
    return (
        //value contains all the information you want to provide at authentication
        //See above
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
