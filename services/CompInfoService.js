const db = require("../SequelizeORM/sequelizeOrmIndex");
const companyinfo = db.compInfo
const Op = db.Sequelize.Op;

//company info
exports.create_company = function(req, result) {
    companyinfo.create(req.body)
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}


exports.findAll_Company = function(req, result) {
    companyinfo.findAll({
            order: [
                ['COMPCODE', 'ASC']
            ],
        })
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}

//////////////////// rowcount from db /////////////////////
exports.rowcount_Compinfo = function(req, result) {
    companyinfo.findAll({})
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
                // res.send(doc2);
                return result(null, doc2)
            }

        })
        .catch(err => {
            return result(err, null)
        });
}

///////////max value find from db
exports.findMax_CompanyCode = function(req, result) {

    db.sequelize.query("SELECT * FROM companyinfos WHERE \"COMPCODE\" = (SELECT max(\"COMPCODE\" ) FROM companyinfos )", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            return result(null, properties)
        }).catch(err => {
            return result(err, null)
        });
}


// Get Max ID from CompInfo for OPEN BALANCE Collection
exports.findMax_Company_openBalance = function(req, result) {

    db.sequelize.query("SELECT * FROM companyinfos WHERE \"COMPCODE\" = (SELECT max(\"COMPCODE\" ) FROM companyinfos )", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            return result(null, properties)
        }).catch(err => {
            return result(err, null)
        });
}