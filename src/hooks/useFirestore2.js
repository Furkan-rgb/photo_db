import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

//This hook gets all documents saved in firestore collection
const useFirestore2 = (collection) => {
    const [docs2, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)

            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    // For each document push these data into documents
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setDocs(documents)
            })
        //unsub when no longer using collection
        return () => unsub();
    }, [collection])

    return { docs2 };
}

export default useFirestore2;