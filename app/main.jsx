console.log("Hello from JSX!");

//The main.jsx file is where all actual rendering is going to take place, this will make it easier to understand what the app is doing exactly.

var React = require('react/addons');

//Require is working because we are using browserify.
//Browserify is letting us use this way of requiring modules than just a normal front end app would allow.
var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
	name: "Ice Cream"
},{
	name: "Waffles"
},{
	name: "Candy",
	purchased: true
},{
	name: "Snarks"
}];

React.render(<GroceryItemList items={initial} />, app); //app refers to the div with id 'app' located in de index.ejs file.
