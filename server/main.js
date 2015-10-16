var express = require('express');

var app = new express();

var parser = require('body-parser');

require('./database.js');

app.get('/',function(req,res){
    res.render('./../app/index.ejs',{});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777);

//This allows the express application to process json requests:
app.use(parser.json());
//This allows to handle post requests:
app.use(parser.urlencoded({extended:false}));

//Register the items route:
require('./routes/items.js')(app);