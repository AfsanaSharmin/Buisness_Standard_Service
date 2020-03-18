const db = require("../SequelizeORM/sequelizeOrmIndex");
const openQuantity = db.openQty;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");

exports.create_OpenQty = function(req, result) {

    openQuantity.bulkCreate(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.rowcount_OpenQty = function(req, result) {
    openQuantity.findAll({})
        .then(data => {
            var l = data.length;
            var doc = {
                scount: 0
            }
            var doc2 = {
                scount: 1
            }

            if (l == 0) {
                result(null, doc)
            } else {
                // res.send(doc2);
                result(null, doc2)
            }

        })
        .catch(err => {
            result(err, null)
        });
}

///////////max value find from db
exports.findMax_OpenQty = function(req, result) {
    //  SELECT  * FROM public.itementries  WHERE \"itemID\" =(SELECT max(\"itemID\") FROM public.itementries)
    db.sequelize.query("SELECT * FROM openquantities WHERE \"qtyID\" = (SELECT max(\"qtyID\" ) FROM openquantities )", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            result(null, properties)
        }).catch(err => {
            result(err, null)
        });
}