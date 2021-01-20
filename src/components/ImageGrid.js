import React from 'react';
import useFirestore from '../hooks/useFirestore';
import useFirestore2 from '../hooks/useFirestore2'
import { Grid, Typography } from '@material-ui/core'

const ImageGrid = () => {
    const { docs } = useFirestore('images')
    const { docs2 } = useFirestore2('accounts')


    console.log(docs2);

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
                                <Typography variant="subtitle1"> By {user.userName} </Typography>
                            </div>
                        ))}

                </Grid>
            ))}
    </Grid>
}
export default ImageGrid;