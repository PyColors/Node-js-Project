var users = require('../controllers/users');

app.get('/users', users.index);

app.post('/users', users.create);
app.put('/users', users.update);
app.delete('/users/:id', users.delete);