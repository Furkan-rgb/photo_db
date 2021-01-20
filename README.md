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
<a href="url"><img src="https://i.imgur.com/S3P16aH.png" height="300"></a> <br>

## Tech/framework used
**Built with**
- <a href="https://create-react-app.dev/docs/getting-started/">Reactjs</a>
- <a href="https://material-ui.com/getting-started/installation/">Material UI</a>
- <a href="https://firebase.google.com/docs/web/setup">Firebase</a>

## Features
<p>In Storygram you've got complete control over how to display the uploaded user images through the Material UI grid system. <br>In the future, clicking on an image will load a dedicated story page of that specific image. Browsing through photos will be an experience instead of an overload of visual stimuli.</p>

<p>Storygram is a PWA which means it can also be added on mobile devices.</p>

## Code Example
<a href="https://material-ui.com/components/grid/">Grid container<a> which centers all grid items inside.<br>
`<Grid container justify="center" >` <br><br>
<a href="https://material-ui.com/components/grid/">Grid item<a> Grid item with breakpoints for small, medium and large screens.<br> 
`<Grid item xs={12} md={6} lg={4}>` <br>
  
  <p> <a href="https://reactrouter.com/web/guides/quick-start">Switch component inside routing</a> to load up components and link to correct pages </p>
  
``` 
<Router basename="/storygram">
  <Switch>
    <Route path="/signup" component={Signup} />
  </Switch>
</Router>
```
## Installation
1. Navigate to the root folder of the project.
2. `npm start` To start the project live server
3. Enjoy tinkering with the project!

## API Reference


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
