var mongoose = require('mongoose');
var path = require('path');

var fs = require('fs');

// var uristring =
// process.env.MONGOLAB_URI ||
// process.env.MONGOHQ_URL ||
// 'mongodb://bruce:bruce@ds161146.mlab.com:61146/userdashboard_script_version'
// mongoose.connect(uristring);
mongoose.connect('mongodb://localhost/newDashboard');

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
})