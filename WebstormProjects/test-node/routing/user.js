var user = require('../controllers/user');

app.get('/user/:name', user.index);
