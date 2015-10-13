var express = require('express');

var app = new express();

app.get('/',function(req,res){
    res.render('./../app/index.ejs',{});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777);

//Register the items route:
require('./routes/items.js')(app);