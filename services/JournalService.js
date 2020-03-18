const db = require("../SequelizeORM/sequelizeOrmIndex");
const journal = db.journal
const Op = db.Sequelize.Op;

exports.insert_Journal = function(req, result) {

    journal.bulkCreate(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}