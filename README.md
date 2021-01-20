# Storygram

Storygram is a place where photography enthusiasts can share their photos. It's about the admiration of one's work without the heavy emphasis on the social media aspect of it. 

## Motivation
I've started this project out of dissatisfaction with the way social media handles photography. Too much of it is about likes, comments and followers. The art of photography gets lost in a sea of empty photos shared by millions.

## Storygram Visuals
#### Logo
<a href="url"><img src="https://i.imgur.com/fdBvgyZ.png" height="200" align="center"></a> <br>

#### Login & Update credentials
<a href="url"><img src="https://i.imgur.com/lHefmUK.png" height="300"></a>
<a href="url"><img src="https://i.imgur.com/LrZR8Ev.png" height="300"></a>

#### Dashboard
![Dashboard-demo](https://user-images.githubusercontent.com/50831308/105186925-8141d600-5b32-11eb-8cd0-f35fa36b8011.gif)

## Tech/framework used
**Built with**
- <a href="https://create-react-app.dev/docs/getting-started/">Reactjs</a>
- <a href="https://material-ui.com/getting-started/installation/">Material UI</a>
- <a href="https://firebase.google.com/docs/web/setup">Firebase</a>

## Features
<p>In Storygram you've got complete control over how to display the uploaded user images through the Material UI grid system. <br>In the future, clicking on an image will load a dedicated story page of that specific image. Browsing through photos will be an experience instead of an overload of visual stimuli.</p>

<p>Storygram is a PWA which means it can also be added on mobile devices.</p>

## Code Example
### The Grid
<a href="https://material-ui.com/components/grid/">Grid container<a> which centers all grid items inside.<br>
`<Grid container justify="center" >` <br><br>
<a href="https://material-ui.com/components/grid/">Grid item<a> with breakpoints for small, medium and large screens.<br> 
`<Grid item xs={12} md={6} lg={4}>` <br>
  
 ### Routing
  <p> <a href="https://reactrouter.com/web/guides/quick-start">Switch component inside routing</a> to load up components and link to correct pages at App.js </p>
  
```JSX
<Router basename="/storygram">
  <Switch>
    <Route path="/signup" component={Signup} />
  </Switch>
</Router>
```
### Image Grid
<p> You can Adjust the following values to alter the way the image grid is displayed at <a href="https://github.com/Furkan-rgb/photo_db/blob/main/src/components/ImageGrid.js">ImageGrid.js</a> </p>
  
```JSX    
  return <Grid container justify="center" >
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
```
### Authentication
<p> At <a href="https://github.com/Furkan-rgb/photo_db/blob/main/src/contexts/AuthContext.js"> authcontext.js </a> you can see all the available database functions for the current logged in user.
  
  ```JSX
      //create user
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    //login function
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
```
    
## Installation
1. Navigate to the root folder of the project.
2. `npm start` To start the project live server
3. Enjoy tinkering with the project!

## License

Copyright (c) 2021 Furkan-rgb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
