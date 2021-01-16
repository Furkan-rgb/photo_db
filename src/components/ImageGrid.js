import React from 'react';
import useFirestore from '../hooks/useFirestore';
import useFirestore2 from '../hooks/useFirestore2'
import { Grid, Typography } from '@material-ui/core'

const ImageGrid = () => {
    const { docs } = useFirestore('images')
    const { docs2 } = useFirestore2('accounts')


    console.log(docs2);

    return <Grid container justify="center">
        {docs && docs.map(doc => (
            <Grid className="img-item" item key={doc.id} xs={12} md={6} lg={4}>
                <img src={doc.url} alt="uploaded pic" />
                <Typography variant="subtitle1"> By {doc.userID} </Typography>
            </Grid>
        ))}
    </Grid>

    // return <Grid container justify="center">
    //     {docs2.map((user) => (
    //         <Grid className="img-item" item key={user.userID} xs={12} md={6} lg={4}>
    //             {docs
    //                 .filter((image) => image.userID === user.userID)
    //                 .map((image) => (
    //                     <img
    //                         src={image.url}
    //                         key={`image-${user.userID}`}
    //                         alt="uploaded pic"
    //                     />
    //                 ))}
    //             <Typography variant="subtitle1"> By {user.userName} </Typography>
    //         </Grid>
    //     ))}
    // </Grid>
}
export default ImageGrid;