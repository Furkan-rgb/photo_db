import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import useFirestore2 from '../hooks/useFirestore2'
import { Grid, Typography, IconButton } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { projectFirestore } from '../firebase';
import { useAuth } from '../contexts/AuthContext'
import { useAlert } from "react-alert";
import { projectStorage } from '../firebase'

const ImageGrid = () => {
    const { docs } = useFirestore('images');
    const { docs2 } = useFirestore2('accounts');
    const { currentUser } = useAuth();
    const [error, setError] = useState("");
    const alert = useAlert();

    // Disable value in button
    // Returns false for the disable button if the current user wants to delete own pic
    const handleButton = (imageId) => {
        if (imageId !== currentUser.uid) {
            return false;
        }
        else {
            return true;
        }
    }

    //Delete an image. Current user can only delete own images
    const handleDeleteImage = (value, id, name) => {
        const imgRef = projectStorage.ref(name);
        if (id === currentUser.uid) {
            setError('');

            // Delete image from storage
            imgRef.delete()
                .then(function () {
                    console.log('storage delete successfull!')
                })
                .catch(function (error) {
                    console.error("Error removing document: ", error);
                })

            // Delete image from images collection
            projectFirestore.collection('images').doc(value).delete()
                .then(function () {
                    console.log("Document successfully deleted!");
                    alert.success("Image deleted succesfully");
                })
                .catch(function (error) {
                    console.error("Error removing document: ", error);
                });
        }
        else {
            setError('That is not your picture!')
            console.log(error)
            alert.error("You can't delete other user's photos");
        }
    };

    console.log(docs);

    return <Grid container justify="center" spacing={2}>
        {/* All images */}
        {docs && docs
            // For every image
            .map(image => (
                // In a grid item
                <Grid className="img-item" item key={image.id} xs={12} md={6} lg={4}>
                    {/* all accounts */}
                    {docs2 && docs2
                        // For every single image:
                        // Filter statament only contains the user of specific image
                        // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
                        .filter((user) => image.userID === user.userID)
                        //Now you have the user that belongs to the image.ID
                        .map(user => (
                            <div key={image.id}>
                                <img src={image.url} alt="uploaded pic" />
                                <Typography variant="subtitle1"> By {user.userName}

                                    {/* Delete button */}
                                    {/* If the image is of the user then a delete button will render */}
                                    {handleButton(image.userID) &&
                                        <IconButton
                                            color="secondary" aria-label="delete image"
                                            onClick={() => handleDeleteImage(image.id, image.userID, image.name)}
                                            component="span" >
                                            <DeleteForever />
                                        </IconButton>}
                                </Typography>
                            </div>
                        ))}
                </Grid>
            ))}
    </Grid>
}
export default ImageGrid;