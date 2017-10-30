/**
 * Index User
 * @param req
 * @param res
 */

exports.index = function (req, res) {
    var returnResponse = function (obj) {
        res.render('user', {user: obj});
    };

    var option = {name: req.params.name};

    models.User.findOneAsync(option)
        .then(logLib.logContent)
        .then(returnResponse)
    ;
};