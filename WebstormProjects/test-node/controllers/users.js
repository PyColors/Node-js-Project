/**
 * Index Users
 * @param req
 * @param res
 */
exports.index = function (req, res) {
    var returnResponse = function (obj) {
        res.render('users', {users: obj});
    };

    // sort({name:1 + execAsync = pour trier les clees depuis API
    // select ou (select -) to seclection key from API
    models.User.find().sort({name:1}).select('-age').execAsync()
        .then(logLib.logContent)
        .then(returnResponse)
    ;
};

// Create new user object with post methode
exports.create = function (req, res) {
    console.log(req.body);
    var user = models.User(req.body).save();
    console.log(user);
};


// Update user object with put methode
exports.update = function (req, res) {
    var returnResponse = function (obj) {
        res.json(obj);
    };

    var options = {_id: req.body._id};

    var returnUpdatedObject = function () {
        models.User.findOneAsync(options)
            .then(logLib.logContent)
            .then(returnResponse)
        ;
    };

    delete req.body['_id'];

    models.User.findOneAndUpdateAsync(options, req.body)
        .then(returnUpdatedObject)
    ;
};

// Delete user object with delete methode
exports.delete = function (req, res) {
    var returnResponse = function () {
        res.json({message: 'All is fine'});
    };

    var returnError = function () {
        res.status(500).json({message: 'Problem'});
    };

    var options = {_id: req.params.id};

    models.User.findOneAndRemoveAsync(options)
        .catch(logLib.throwError)
        // done to have two ways to delete
        .done(returnResponse, returnError)
    ;
};