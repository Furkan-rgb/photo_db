import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { CircularProgress, makeStyles } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
}));

const ProgressBar = ({ file, setFile }) => {
    const classes = useStyles();
    const { url, progress } = useStorage(file);
    console.log(progress, url);

    //if file is null there is no more progressbar
    //so reset the file to null after obtaining a url, which means it has finished uploading
    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        // <div className="progress-bar" style={{ width: progress + '%' }}></div>
        // <div><LinearProgress variant="determinate" value={progress} /></div>
        <div><CircularProgress variant="determinate" className={classes.fabProgress} size={68} value={progress} /></div>
    )
}
export default ProgressBar;