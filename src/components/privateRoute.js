import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()

    return (
        //This is important as to not render the dashboard component when no user is logged in or after logging out
        <Route
            {...rest}
            //If there is a current user then render out the component
            //If there is no user, redirect to login page 
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}
        ></Route>
    )
}