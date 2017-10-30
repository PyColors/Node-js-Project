var users = require('../schema/users');

exports.User = mongoose.model('User', users.schema);