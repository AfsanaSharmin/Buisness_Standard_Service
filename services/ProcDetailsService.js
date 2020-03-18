const db = require("../SequelizeORM/sequelizeOrmIndex");
const procdetails = db.procdetails
const Op = db.Sequelize.Op;

exports.insert_ProcDetails = function(req, result) {

    procdetails.bulkCreate(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}


exports.getAllProcDetails = function(req, result) {
    procdetails.findAll({})
        .then(num => {
            console.log(num)
            result(null, num)
        })
        .catch(err => {
            result(err, null)
        });
}