/**
 * Index Action
 * @param req
 * @param res
 */
exports.index = function (req, res) {
    var returnResponseOfFileJson = function (content) {
        res.json(content);
    };

    fs.readFileAsync('test.json')
        .then(logLib.logContent)
        .then(JSON.parse)
        .catch(function (e) {
            console.log(e);
            res.status(500).send('The file does not exist');

            throw new Error('The file does not exist');
        })
        .done(returnResponseOfFileJson)
    ;

    console.log("coco autre chose");
};
