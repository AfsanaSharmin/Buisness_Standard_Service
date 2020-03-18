const db = require("../SequelizeORM/sequelizeOrmIndex");
const procmaster = db.procmaster
const Op = db.Sequelize.Op;

exports.create_procmaster = function(req, result) {
    procmaster.bulkCreate(req.body)
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}


exports.procmaster_max_row = function(req, result) {

    db.sequelize.query("SELECT * FROM procmasters WHERE \"invoiceID\" = (SELECT max(\"invoiceID\" ) FROM procmasters )", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            result(null, properties)
        }).catch(err => {
            result(err, null)
        });
}

exports.procmaster_row_check = function(req, result) {
    procmaster.findAll({})
        .then(data => {
            var l = data.length;
            var doc = {
                scount: 0
            }
            var doc2 = {
                scount: 1
            }

            if (l == 0) {
                return result(null, doc)
            } else {

                return result(null, doc2)
            }

        })
        .catch(err => {
            return result(err, null)
        });
}

exports.update_procmaster = function(req, result) {
    procmaster.update({ procOfficer: req.body.procOfficer }, {
            where: { id: req.params.id }
        })
        .then(num => {
            // console.log(num)
            return result(null, num)
        })
        .catch(err => {
            return result(err, null)
        });
}