console.log("Hello from JSX!");

//The main.jsx file is where all actual rendering is going to take place, this will make it easier to understand what the app is doing exactly.

var React = require('react/addons');

//Require is working because we are using browserify.
//Browserify is letting us use this way of requiring modules than just a normal front end app would allow.
var GroceryItemList = require('./components/GroceryItemList.jsx');

React.render(<GroceryItemList />, app); //app refers to the div with id 'app' located in de index.ejs file.
