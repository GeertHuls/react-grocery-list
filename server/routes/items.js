
module.exports = function (app) {

	var GroceryItem = require('./../models/GroceryItem.js');

	app.route('/api/items')
		.get(function (req, res) {
			GroceryItem.find(function(error, data) {
				res.send(data);
			})
		})
		.post(function (req, res) {
			var item = req.body;

			var groceryItem = new GroceryItem(item);
			groceryItem.save(function(err, data) {
				res.status(200).send()
			});
		});

	app.route('api/items/:id')
		.delete(function(req, res) {
			GroceryItem.find({
				_id: req.params.id
			})
			.remove();
		})
		.patch(function(req, res) {
			GroceryItem.findOne({
				_id: req.body._id
			}, function(error, data) {
				for (var key in req.body) {
					data[key] = req.body[key];
				}
				doc.save();
				res.status(200).send();
			});
		});
}
