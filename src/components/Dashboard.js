import React, { useState } from 'react'
import { Grid, Typography, Card, Button, makeStyles, IconButton } from "@material-ui/core"
import { PhotoCamera } from '@material-ui/icons'
import { Link, useHistory } from "react-router-dom"
import { Alert } from "@material-ui/lab"
import { useAuth } from '../contexts/AuthContext'
import ProgressBar from './ProgressBar'
import ImageGrid from './ImageGrid'
import DeleteIcon from '@material-ui/icons/Delete';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    internalCardContainer: {
        '& > *': {
            margin: theme.spacing(0),
        },
        padding: 5,
    },
    mainContainer: {
        width: '100%',
    },
    input: {
        display: 'none',
    },
    info: {
        width: "100%",
    },
    card: {
        width: '100%',
        maxWidth: 600,
        marginTop: 5,
        marginBottom: 5,
    },
    button: {
        paddingTop: 5,
        paddingBottom: 10,
    },
    icon: {
        fontSize: '2em',
    },
}));

export default function Dashboard() {
    const classes = useStyles()
    const [error, setError] = useState("")
    const history = useHistory()
    const { currentUser, logout, deleteAccount } = useAuth()

    // Dialog box 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //Log out handler
    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/login')
        }
        catch {
            setError('Failed to logout')
        }
    }

    //Delete account handler
    async function handleDelete() {
        setError('')
        try {
            await deleteAccount()
            history.push('/login')
        }
        catch (error) {
            setError(error.message)
        }
    }

    //Store image hook
    const [file, setFile] = useState(null);

    //Allowed filetypes
    const types = ['image/png', 'image/jpeg'];

    //Image handler
    //selected image
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        //Check if a file is selected
        if (selected && types.includes(selected.type)) {
            //store the file
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError('Please select an image file (png or jpeg)')
        }
    }

    return (
        // Main container with (Profile info and upload card) and (Image grid)
        // <Grid container justify="center" direction="column" alignItems="flex-start" className={classes.mainContainer}>
        <Grid container justify="center">

            {/* Profile + upload card container */}
            {/* <Grid container item xs={12} sm={8} justify="center" direction="column" alignItems="flex-start"> */}
            <Grid item xs={12} sm={8} align="center">
                <Card className={classes.card} align="center">
                    <Grid container direction="column" className={classes.internalCardContainer}>
                        {/* User info */}
                        <Grid item align="center">
                            <Typography align="center" gutterBottom variant="h2">Storygram</Typography>
                            <Typography>Email: {currentUser.email} </Typography>
                            <Typography>Username: {currentUser.displayName} </Typography>
                            <Typography>UserID: {currentUser.uid} </Typography>
                        </Grid>

                        {/* Error and file name message output */}
                        <Grid item className={classes.info}>
                            {/* If left statement then right statement.. */}
                            {error && <Alert severity="error">{error}</Alert>}
                            {file && <Alert severity="info">Selected image: {file.name}</Alert>}
                            {file && <ProgressBar file={file} setFile={setFile} />}
                        </Grid>

                        {/* Upload image */}
                        <Grid item align='center'>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="icon-button-file"
                                type="file"
                                onChange={changeHandler}
                            />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span" >
                                    <PhotoCamera className={classes.icon} />
                                </IconButton>
                            </label>
                        </Grid>

                        {/* Update profile info */}
                        <Grid item align='center' className={classes.button}>
                            <Button variant="contained" color="secondary" component={Link} to={"./UpdateProfile"}>
                                Update
                            </Button>
                        </Grid>

                        {/* Logout button */}
                        <Grid item align='center' className={classes.button}>
                            <Button variant="contained" onClick={handleLogout}>Log out</Button>
                        </Grid>

                        {/* Delete account button */}
                        <Grid item align='center' className={classes.button}>
                            <Button variant="outlined" color="primary" onClick={handleClickOpen} startIcon={<DeleteIcon />}>
                                Delete account
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete your account?"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Deleting your account can not be undone.
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleDelete} color="primary" autoFocus>
                                        Delete
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            {/* </Grid> */}

            {/* Image grid imported from ImageGrid.js*/}
            <Grid item align="center">
                <ImageGrid />
            </Grid>

        </Grid >
    )
}
