import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import useFirestore2 from '../hooks/useFirestore2'
import { Grid, Typography, IconButton, GridList, GridListTile, Divider, makeStyles } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { projectFirestore } from '../firebase';
import { useAuth } from '../contexts/AuthContext'
import { useAlert } from "react-alert";
import { projectStorage } from '../firebase'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: '100%',
    },
}));

const ImageGrid = () => {
    const { docs } = useFirestore('images');
    const { docs2 } = useFirestore2('accounts');
    const { currentUser } = useAuth();
    const [error, setError] = useState("");
    const alert = useAlert();

    const classes = useStyles();

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

    //     return <Grid container alignItems="flex-start" justify="center" className="img-container" spacing={1} flexWrap="wrap">
    //         {/* All images */}
    //         {docs && docs
    //             // For every image
    //             .map(image => (
    //                 // In a grid item
    //                 <Grid className="img-item" item key={image.id} xs={12} md={6} lg={4} alignSelf="flex-start">
    //                     {/* all accounts */}
    //                     {docs2 && docs2
    //                         // For every single image:
    //                         // Filter statament only contains the user of specific image
    //                         // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
    //                         .filter((user) => image.userID === user.userID)
    //                         //Now you have the user that belongs to the image.ID
    //                         .map(user => (
    //                             <div key={image.id} className="div">
    //                                 <img src={image.url} alt="uploaded pic" />
    //                                 <Typography variant="subtitle1"> By {user.userName}

    //                                     {/* Delete button */}
    //                                     {/* If the image is of the user then a delete button will render */}
    //                                     {handleButton(image.userID) &&
    //                                         <IconButton
    //                                             color="secondary" aria-label="delete image"
    //                                             onClick={() => handleDeleteImage(image.id, image.userID, image.name)}
    //                                             component="span" >
    //                                             <DeleteForever />
    //                                         </IconButton>}
    //                                 </Typography>
    //                                 <Divider />
    //                             </div>
    //                         ))}
    //                 </Grid>
    //             ))}
    //     </Grid>
    // }


    return <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    >
        <Masonry gutter="10px">
            {docs && docs
                // For every image
                .map(image => (
                    <img src={image.url} alt={image.name} key={image.id} style={{ width: "100%", display: "block" }} />
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
}
export default ImageGrid;