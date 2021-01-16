import React, { useRef, useState } from 'react';
import { TextField, Card, Button, Grid, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../contexts/AuthContext';
//useHistory hook for rerouting to dashboard after login
import { Link } from "react-router-dom";


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

export default function ForgotPassword() {
    const classes = useStyles()

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)


    //handles the signup
    //function that handles the submit info (email and password) and error handling (see useRef hooks)
    async function handleSubmit(e) {
        //preventDefault prevents refreshing
        e.preventDefault()
        try {
            setMessage('')
            setError("")
            setLoading(true)
            //reset 
            await resetPassword(emailRef.current.value)
            setMessage('Check your email')
        } catch {
            setError("Failed to reset password")
        }
        setLoading(false)
    }

    return (
        <Grid container className={classes.container} justify='center' alignItems='center'>
            <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                    <Grid container justify="center" direction="column" alignItems="center" >
                        <Typography align='center' variant="h3" component="h2">
                            Reset Password
                        </Typography>
                        {error && <Alert severity="error">{error}</Alert>}
                        {message && <Alert severity="success">{message}</Alert>}
                        <form onSubmit={handleSubmit} align='center' className={classes.root} >
                            <Grid item>
                                <TextField
                                    className={classes.inputField}
                                    required
                                    id="email-input"
                                    label="Email"
                                    inputRef={emailRef}
                                    textalign='center'
                                />
                            </Grid>
                            <Button disabled={loading} variant="contained" color="primary" type="submit">
                                Reset Password
                            </Button>
                            <Typography><Link to='/login'>Login</Link></Typography>
                        </form>
                    </Grid>
                </Card>
                <Typography align='center' variant="subtitle1" component="h2">
                    Need an account? <Link to="/signup">Sign up</Link>
                </Typography>
            </Grid>
        </Grid>
    )
}
