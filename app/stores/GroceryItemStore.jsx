var dispatcher = require('./../dispatcher.js');

function GroceryItemStore() {
	//You can look at stores like big fancy arrays.
	var items = [{
		name: "Ice Cream"
	},{
		name: "Waffles"
	},{
		name: "Candy",
		purchased: true
	},{
		name: "Snarks"
	}];

	var listeners = [];

	function getItems () {
		return items;
	}

	function addGroceryItem (item) {
		items.push(item);
		triggerListeners();
	}

	function deleteGroceryItem (item) {
		var index;
		items.filter(function (_item, _index) {
			if (_item.name == item.name) {
				index = _index;
			}
		});

		items.splice(index, 1);
		triggerListeners();
	}

	function onChange (listener) {
		listeners.push(listener);
	}

	function triggerListeners () {
		listeners.forEach(function (listener) {
			listener(items);
		})
	}

	dispatcher.register(function (event) {
		var split = event.type.split(':');
		if (split[0] === 'grocery-item') {
			switch(split[1]) {
				case "add":
					addGroceryItem(event.payload);
					break;
				case "delete":
					deleteGroceryItem(event.payload);
					break;
			}
		}
	});

	return {
		getItems: getItems,
		onChange: onChange
	};
}

module.exports = new GroceryItemStore();

//The store is a place where all grocery items reside.
//Only the store can tell what happens to these item, other compoments can only request things.

//This makes it easier to tell what happens to the items since it only happens here.
