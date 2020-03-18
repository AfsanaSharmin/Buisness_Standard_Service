const db = require("../SequelizeORM/sequelizeOrmIndex");
const yearInfo = db.yearInfo;
const Op = db.Sequelize.Op;

exports.create_year = function(req, result) {
    yearInfo.create(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}


exports.getBy_YearCode = function(req, result) {
    yearInfo.findAll({
            attributes: ['YEARCODE', 'STARTDATE', 'ENDDATE'],
            where: { YEARCODE: req.params.yearcode },
        })
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.findAll_Year = function(req, result) {
    yearInfo.findAll({
            order: [
                ['YEARCODE', 'ASC']
            ],
        })
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

///////////max value find from db
exports.findMax_yearinfo = function(req, result) {

    db.sequelize.query("SELECT * FROM yearinfos WHERE \"YEARCODE\" = (SELECT max(\"YEARCODE\" ) FROM yearinfos )", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            result(null, properties)
        }).catch(err => {
            result(err, null)
        });
}