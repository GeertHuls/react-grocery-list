//Browserify ensures that this library is available for use.
//Require is much better than include scripts in html. Here we're absolutely
//clear what our variables are in this scope.
var React = require('react/addons');
var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

//module.exports will allow any other file to quickly access
//this grocery item list class and create new instances of it.
module.exports = React.createClass({
	//the render method must always be implemented.
	render: function () {
		return (
			//this is jsx - an bybrid of html and js:
			<div>
				<h1>Grocery listify</h1>
				<div>
					{this.props.items.map(function (item, index) {
						return(
							<GroceryItem item={item} key={"item"+index}/>
						)
					})
					}
				</div>
				<GroceryListAddItem />
			</div>
		);
	}
});