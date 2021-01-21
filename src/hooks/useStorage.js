import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase'
import { useAuth } from '../contexts/AuthContext'

//Upload file to firebase storage
const useStorage = (file) => {
    //progress of load
    const [progress, setProgress] = useState(0);
    //any errors while uploading
    const [error, setError] = useState(null);
    //url after uploading
    const [url, setUrl] = useState(null);
    const { currentUser } = useAuth();
    // const [user, setUser ]
    //all the logic uploading the file
    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');


        //uploads the file with reference ^
        //listener fires functions when state changes
        //snapshot in time of the upload at that moment in time
        storageRef.put(file).on('state_changed', (snap) => {
            //percentage of the upload
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            const name = file.name;
            collectionRef.add({ url, createdAt, userID: currentUser.uid, name })
            setUrl(url);
        })
    }, [file, currentUser]) //everytime file changes this effect will fire
    //these will be the the values you can access
    return { progress, url, error }
}

export default useStorage;
