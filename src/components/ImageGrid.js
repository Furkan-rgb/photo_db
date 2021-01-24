import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import useFirestore2 from '../hooks/useFirestore2'
import { Typography, IconButton, Card } from '@material-ui/core'
import { DeleteForever } from '@material-ui/icons'
import { projectFirestore } from '../firebase';
import { useAuth } from '../contexts/AuthContext'
import { useAlert } from "react-alert";
import { projectStorage } from '../firebase'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import ModalImage from "react-modal-image";


const ImageGrid = () => {
    const { docs } = useFirestore('images');
    const { docs2 } = useFirestore2('accounts');
    const { currentUser } = useAuth();
    const [error, setError] = useState("");
    const alert = useAlert();
    const [mouse, setMouse] = useState(false);

    const onMouseEnter = () => {
        return setMouse(true);
    }

    const onMouseLeave = () => {
        return setMouse(false);
    }
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
    const handleDeleteImage = (value, id, url) => {
        const imgRef = projectStorage.refFromURL(url);
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

    return <ResponsiveMasonry
        //Breakpoints for pixels per column 
        //pixels : column
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    >
        <Masonry gutter="10px">
            {docs && docs
                // For every image
                .map(image => (
                    <div>
                        {docs2 && docs2
                            // For every single image:
                            // Filter statament only contains the user of specific image
                            // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
                            .filter((user) => image.userID === user.userID)
                            //Now you have the user that belongs to the image.ID
                            .map(user => (
                                <div>
                                    <div
                                        onMouseEnter={() => onMouseEnter()}
                                        onMouseLeave={() => onMouseLeave()}
                                    >
                                        <ModalImage
                                            small={image.url}
                                            medium={image.url}
                                            alt={image.name}
                                            hideDownload
                                            hideZoom
                                        />
                                    </div>
                                    <Card
                                        key={image.id}
                                        className="Card"
                                    >
                                        {/* <img src={image.url} alt={image.name} key={image.id} style={{ width: "100%", display: "block" }} /> */}
                                        <Typography gutterBottom variant="subtitle1"> 'Title' by {user.userName}

                                            {/* If the image is of the user then a delete button will render */}
                                            {/* Delete button */}
                                            {handleButton(image.userID) &&
                                                <IconButton
                                                    color="secondary" aria-label="delete image"
                                                    onClick={() => handleDeleteImage(image.id, image.userID, image.url)}
                                                    component="span" >
                                                    <DeleteForever />
                                                </IconButton>}
                                        </Typography>
                                    </Card>
                                </div>
                            ))}
                    </div>
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
}
export default ImageGrid;

