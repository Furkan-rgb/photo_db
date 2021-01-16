import React, { useRef, useState } from 'react';
import { TextField, Card, Button, Grid, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        width: '80%',
    },
    container: {
        height: '100vh',
    },
    card: {
        width: '100%',
        //Below the card itself
        marginBottom: 10,
        //Below the signup button
        paddingBottom: 5,
    },
    inputField: {
        width: '100%',
        maxWidth: 350,
    }
}));

export default function UpdateProfile() {
    const classes = useStyles()

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const displayNameRef = useRef();
    const { currentUser, updatePassword, updateEmail, updateDisplayName } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    //handles the signup
    //function that handles the submit info (email and password) and error handling (see useRef hooks)
    function handleSubmit(e) {
        //preventDefault prevents refreshing
        e.preventDefault()
        //if both passwords are not the same
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }
        //wait untill all promises finish before throwing errors
        const promises = []
        setLoading(true)
        setError("")

        //Update email
        //if  email is not equal to current email
        if (emailRef.current.value !== currentUser.email) {
            //update email with current value
            promises.push(updateEmail(emailRef.current.value))
        }

        //Update Username
        //if  username is not equal to current username
        if (displayNameRef.current.value !== currentUser.displayName) {
            //update username with current value
            promises.push(updateDisplayName(displayNameRef.current.value))
        }

        //Update password
        //update password with current value (if there is a value ofcourse)
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        //if all promises are succsful redirect to homepage
        Promise.all(promises).then(() => {
            history.push('/')
            //catch the error
        }).catch((error) => {
            setError(error.message)
            //setLoading state to false again
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <Grid container className={classes.container} justify='center' alignItems='center'>
            <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                    <Grid container justify="center" direction="column" alignItems="center" >
                        <Typography align='center' variant="h3" component="h2">
                            Update Profile
                        </Typography>
                        {error && <Alert severity="error">{error}</Alert>}
                        <form onSubmit={handleSubmit} align='center' className={classes.root} >
                            {/* Grid item for username and email */}
                            <Grid item>
                                {/* Username */}
                                <TextField
                                    className={classes.inputField}
                                    id="display-name"
                                    label="Display Name"
                                    inputRef={displayNameRef}
                                    textalign='center'
                                    defaultValue={currentUser.displayName}
                                    placeholder="Leave empty to keep the same"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {/* Email */}
                                <TextField
                                    className={classes.inputField}
                                    required
                                    id="email-input"
                                    label="Email"
                                    inputRef={emailRef}
                                    textalign='center'
                                    defaultValue={currentUser.email}
                                />
                            </Grid>
                            {/* Password */}
                            <Grid item>
                                <TextField
                                    className={classes.inputField}
                                    id="password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    inputRef={passwordRef}
                                    placeholder="Leave empty to keep the same"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            {/* Password check */}
                            <Grid item>
                                <TextField
                                    className={classes.inputField}
                                    id="password-confirm"
                                    label="Password-confirm"
                                    type="password"
                                    autoComplete="current-password"
                                    inputRef={passwordConfirmRef}
                                    placeholder="Leave empty to keep the same"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Button disabled={loading} variant="contained" color="primary" type="submit">
                                Update
                            </Button>
                        </form>
                    </Grid>
                </Card>
                <Typography align='center' variant="subtitle1" component="h2">
                    <Link to="/">Cancel</Link>
                </Typography>
            </Grid>
        </Grid>
    )
}
