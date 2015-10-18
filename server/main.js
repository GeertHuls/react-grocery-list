var express = require('express');

var app = new express();

var parser = require('body-parser');

//using same react library as we did in front end code
var React = require('react/addons');

//Load the main react component
var GroceryItem = require('./models/GroceryItem.js');

//Babel is used here to process the jsx at the server side.
//Node on its own cannot handle the html code inside the javascript file.
//As a side effect, you can also start writing ES6 now since it is supported by babel as well. 
require('babel/register');
require('./database.js');

app.get('/',function(req,res){
	//res.render('./../app/index.ejs',{});
	
	//Create a virtual instance of the app the will then
	//serialize html. Use the factory for that.
	var application =
		React.createFactory(require('./../app/components/GroceryItemList.jsx'));

	GroceryItem.find(function(error, data) {
		var generated = React.renderToString(application({
			items: data
		}));

		res.render('./../app/index.ejs', {reactOutput: generated});
	});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777);

//This allows the express application to process json requests:
app.use(parser.json());
//This allows to handle post requests:
//In the next line, we’re asking the bodyParser library to take any requests that contain application/x-www-form-urlencoded message bodies 
//and parse the contents into a JavaScript object. This object is passed along as a body property on the Request object maintained by express. 
app.use(parser.urlencoded({extended:false}));



//Register the items route:
require('./routes/items.js')(app);