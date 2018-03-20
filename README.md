# [Gallery](http://gallery.app.com2.s3-website.us-east-2.amazonaws.com/)
Gallery is an app that allows user to view photos from Unsplash API.

React App + Jest + Enzyme.

## Installation for localhost
Assuming you already have NPM installed on on your computer.

Linux/Mac Terminal <br />

* $ cd <some_dir>/src
  * where package.json live
* $ npm install
* $ npm start 
  * the app on localhost:3000

### Testing
* $yarn test

If error due to TypeError: environment.setup, then eject, then re-run all 
test suites.

Might needed to run '$ npm install' again

## Core Functionality [Completed]
1. Create an app that allows a user to  view random photos . 
2. Display 25 image results plus the author’s username in a list or grid layout.  
  a. Clicking the username should open the user’s profile on Unsplash, eg. 
https://unsplash.com/@ugmonk . 
3. Handle API errors by displaying an error message to the user. 

#### Optional
If you have time, consider making some (but not all!) of the following improvements: 

* [x] Instead of displaying random photos, provide  search  functionality for the user. 
* [x] Create a responsive display for the results that looks good on a computer, tablet, and 
phone. 
* [x] Host your app on a personal virtual development environment (e.g., AWS, Heroku) 
* [-] Improve performance so your app should is usable over a slow connection (hint: don’t 
display full­size images). 
* [ ] Allow the user to download an image by clicking on it or a button below it. 

**Note: [-] Partially completed - could be done better. 

## Future Improvement/ Issues
* [ ] Fix the Navbar aesthetic
* [ ] Enlarge or something to view the picture at large scale
* [ ] Refractor code
* [ ] More Tests
  * [ ] Mock
  * [ ] Snapshot