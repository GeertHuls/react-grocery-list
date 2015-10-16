var mongoose = require('mongoose');

var GroceryItemSchema = {
	id: String, //this is actual javascript, used in a very creative way
	name: String,
	purchased: Boolean
};

var GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema, 'groceryItems');

module.exports = GroceryItem;