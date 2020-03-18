const db = require("../SequelizeORM/sequelizeOrmIndex");
const voucher = db.voucher
const Op = db.Sequelize.Op;

exports.insert_voucher = function(req, result) {

    voucher.create(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

//////////////////// rowcount from db /////////////////////
exports.rowcount_voucher = function(req, result) {
    voucher.findAll({})
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


exports.findMax_voucher = function(req, result) {

    db.sequelize.query("SELECT * FROM vouchers WHERE \"VID\" = (SELECT max(\"VID\" ) FROM vouchers )", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            result(null, properties)
        }).catch(err => {
            result(err, null)
        });
}

exports.get_voucher_by_vno = function(req, result) {
    voucher.findAll({
            where: { VNO: req.body.VNO }
        })
        .then(num => {
            console.log(num)
            result(null, num)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.delete_voucher_by_vid = function(req, result) {
    voucher.destroy({
            where: { VID: req.params.VID }
        })
        .then(num => {
            console.log(num)
            result(null, num)
        })
        .catch(err => {
            result(err, null)
        });
}