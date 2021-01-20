import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import useFirestore2 from '../hooks/useFirestore2'
import { Grid, Typography, IconButton } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { projectFirestore } from '../firebase';
import { useAuth } from '../contexts/AuthContext'
import { useAlert } from "react-alert";

const ImageGrid = () => {
    const { docs } = useFirestore('images');
    const { docs2 } = useFirestore2('accounts');
    const { currentUser } = useAuth();
    const [error, setError] = useState("")
    const alert = useAlert();

    //Delete an image. Current user can only delete own images
    const handleDeleteImage = (value, id) => {
        if (id === currentUser.uid) {
            setError('')
            return projectFirestore.collection('images').doc(value).delete()
                .then(function () {
                    console.log("Document successfully deleted!");
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });
        }
        else {
            setError('That is not your picture!')
            console.log(error)
            alert.show("You can't delete other user's photos");
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
                            <div>
                                <img src={image.url} alt="uploaded pic" />
                                <Typography variant="subtitle1"> By {user.userName}
                                    <IconButton color="secondary" aria-label="delete image" onClick={() => handleDeleteImage(image.id, image.userID)} component="span" >
                                        <DeleteForever />
                                    </IconButton>
                                </Typography>
                            </div>
                        ))}

                </Grid>
            ))}
    </Grid>
}
export default ImageGrid;