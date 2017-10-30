var path = require("path");
var express = require("express");
Promise = require('bluebird');
mongoose = Promise.promisifyAll(require('mongoose'));
fs = Promise.promisifyAll(require('fs'));
var cors = require('cors');
logLib = require('./lib/log');
exphbs = require('express-handlebars');

app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../')));

app.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  contents = fs.readFileSync('sliderImages.json', 'utf8');
  res.end(contents);
});

var hbs = exphbs.create({
    helpers: {
        foo: function () {
            return 'FOO';
        }
    },
    defaultLayout: 'main'
});


// for handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// config
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/book_phone');

//import model
models = require('./models');
// console.log(new models.User());
 

// import routing
require('./routing/callback');

// import routing users
require('./routing/users');

// import routing user
require('./routing/user');

app.listen(process.env.PORT || 8080);
// app.listen();
