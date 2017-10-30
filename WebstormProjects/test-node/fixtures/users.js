var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('book_phone');
var id = pow.createObjectId;

fixtures.load({
    users: [
        {
            "_id": id(),
            "name":"Dupont",
            "lastname":"Maurice",
            "age":"55",
            "job":"Techincal support",
            "tel":"01234567895"
        },
        {
            "_id": id(),
            "name":"coco",
            "lastname":"Anna",
            "age":"23",
            "job":"Secretaryd",
            "tel":"01234565895"
        },
        {
            "_id": id(),
            "name":"toto",
            "lastname":"Annadd",
            "age":"23",
            "job":"Secretary",
            "tel":"01234567895"
        }
    ]
});