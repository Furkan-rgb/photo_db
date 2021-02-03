import React, { useState } from 'react'
import { Grid, Typography, Card, Button, makeStyles, IconButton, Hidden, AppBar, Toolbar, Fab } from "@material-ui/core"
import { PhotoCamera, AccountBox, ExitToApp } from '@material-ui/icons'
import { Link, useHistory } from "react-router-dom"
import { Alert } from "@material-ui/lab"
import { useAuth } from '../contexts/AuthContext'
import ProgressBar from './ProgressBar'
import ImageGrid from './ImageGrid'
import { useAlert } from "react-alert";

import { green } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import CameraIcon from '@material-ui/icons/Camera';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


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
        marginBottom: 10
    },
    button: {
        paddingTop: 5,
        paddingBottom: 10,
    },
    icon: {
        fontSize: '2em',
    },
    xsAppBar: {
        top: 'auto',
        bottom: 0,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    grow: {
        flexGrow: 1,
    },
    toolbar: {
        toolbar: theme.mixins,
        margin: 0,
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    const [error, setError] = useState("")
    const history = useHistory()
    const { currentUser, logout } = useAuth()
    const alert = useAlert();


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


    //Store image hook
    const [file, setFile] = useState(null);

    //Allowed filetypes
    const types = ['image/png', 'image/jpeg'];

    //Image handler
    //selected image
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected)
        //Check if a file is selected
        if (selected && types.includes(selected.type)) {
            //store the file
            setFile(selected);
            setError('');
            alert.success("Image succesfully uploaded");
        }
        else {
            setFile(null);
            setError('Please select an image file (png or jpeg)')
        }
    }

    // Menu items

    return (
        // Main container with (Profile info and upload card) and (Image grid)
        <Grid container justify="center">

            {/* Desktop appbar */}
            <Hidden xsDown>
                <AppBar position="static">
                    <Toolbar>

                        {/* Camera */}
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="icon-button-file"
                            type="file"
                            onChange={changeHandler}
                        />
                        <label htmlFor="icon-button-file">
                            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="uploadPhoto" component="span">
                                <AddAPhotoIcon />
                            </IconButton>
                        </label>

                        {/* Account  */}
                        <IconButton component={Link} to={"./UpdateProfile"} edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                            <AccountCircle />
                        </IconButton>

                        <Typography variant="h1" className={classes.title}>Storygram</Typography>
                        <Typography variant="h6" className={classes.title}>{currentUser.displayName}</Typography>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Hidden>

            {/* Mobile app bar */}
            <Hidden smUp>
                <AppBar position="fixed" color="primary" className={classes.xsAppBar}>
                    <Toolbar>
                        <Typography>{currentUser.displayName}</Typography>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="icon-button-file"
                            type="file"
                            onChange={changeHandler}
                        />
                        <label htmlFor="icon-button-file">
                            <Fab color="secondary" aria-label="add" className={classes.fabButton} component="span">
                                <CameraIcon />
                            </Fab>
                        </label>
                        {file && <ProgressBar file={file} setFile={setFile} />}

                        <div className={classes.grow} />
                        <IconButton component={Link} to={"./UpdateProfile"} edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                            <AccountCircle />
                        </IconButton>
                        <IconButton edge="end" color="inherit" onClick={handleLogout}>
                            <ExitToAppIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Hidden>

            {/* Title container */}
            <Grid item xs={12} sm={8} align="center">
                <Card className={classes.card} align="center">
                    <Grid container direction="column" className={classes.internalCardContainer}>
                        {/* User info */}
                        <Grid item align="center">
                            <Typography align="center" variant="h2">Storygram</Typography>
                        </Grid>

                        {/* Information message output */}
                        <Grid item className={classes.info}>
                            {/* If left statement then right statement.. */}
                            {error && <Alert severity="error">{error}</Alert>}
                            {file && <Alert severity="info">Selected image: {file.name}</Alert>}
                        </Grid>
                        {/* {file && <ProgressBar file={file} setFile={setFile} />} */}

                    </Grid>
                </Card>
            </Grid>
            {/* </Grid> */}

            {/* Image grid imported from ImageGrid.js*/}
            <Grid item xs={12} align="center">
                <ImageGrid />
            </Grid>
        </Grid >
    )
}
