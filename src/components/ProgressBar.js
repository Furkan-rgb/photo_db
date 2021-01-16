import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({ file, setFile }) => {
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
        <div className="progress-bar" style={{ width: progress + '%' }}></div>
    )
}
export default ProgressBar;