import React, { useRef, useState } from 'react';
import { TextField, Card, Button, Grid, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import { projectFirestore } from '../firebase'


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

export default function Signup() {
    const classes = useStyles()

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const displayNameRef = useRef();;
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const accounts = projectFirestore.collection('accounts');


    //handles the signup
    //function that handles the submit info (email and password) and error handling (see useRef hooks)
    async function handleSubmit(e) {
        //preventDefault prevents refreshing
        e.preventDefault()

        //if both passwords are not the same
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return (
                setError("Passwords do not match")
            )
        }

        try {
            setError("");
            setLoading(true);
            const result = await signup(
                emailRef.current.value,
                passwordRef.current.value
            );
            //Set displayname
            //https://medium.com/@doyinolarewaju/firebase-adding-extra-information-to-user-on-sign-up-and-other-tips-4ebe215866e
            await result.user.updateProfile({
                displayName: displayNameRef.current.value
            });

            console.log(result);

            //Set user id
            await accounts.doc(result.user.uid).set({
                userID: result.user.uid,
                displayName: result.user.userName
            });
            history.push("/");
        }

        // Firebase signup error
        catch (error) {
            setError(error.message);
        }
        setLoading(false)
    }

    return (
        <Grid container className={classes.container} justify='center' alignItems='center'>
            <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                    <Grid container justify="center" direction="column" alignItems="center" >
                        <Typography align='center' variant="h3" component="h2">
                            Sign up
                        </Typography>
                        {/* Errors */}
                        {error && <Alert severity="error">{error}</Alert>}
                        <form onSubmit={handleSubmit} align='center' className={classes.root} >
                            {/* Username + email */}
                            <Grid item>
                                {/* Username */}
                                <TextField
                                    className={classes.inputField}
                                    required
                                    id="display-name"
                                    label="Display Name"
                                    inputRef={displayNameRef}
                                    textalign='center'
                                />
                                {/* Email */}
                                <TextField
                                    className={classes.inputField}
                                    required
                                    id="email-input"
                                    label="Email"
                                    inputRef={emailRef}
                                    textalign='center'
                                />
                            </Grid>
                            {/* Password */}
                            <Grid item>
                                <TextField
                                    className={classes.inputField}
                                    required
                                    id="password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    inputRef={passwordRef}
                                />
                            </Grid>
                            {/* Password check */}
                            <Grid item>
                                <TextField
                                    className={classes.inputField}
                                    required
                                    id="password-confirm"
                                    label="Password-confirm"
                                    type="password"
                                    autoComplete="current-password"
                                    inputRef={passwordConfirmRef}
                                />
                            </Grid>
                            <Button disabled={loading} variant="contained" color="primary" type="submit">
                                Sign Up
                            </Button>
                        </form>
                    </Grid>
                </Card>
                <Typography align='center' variant="subtitle1" component="h2">
                    Already have an account? <Link to="/login">Log in</Link>
                </Typography>
            </Grid>
        </Grid>
    )
}
