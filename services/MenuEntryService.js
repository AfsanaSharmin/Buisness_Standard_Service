//const unit_entry = require('../model/unitEntry')
const db = require("../SequelizeORM/sequelizeOrmIndex");
const menuentry = db.menuentry;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");

exports.create_Menuentry = function(req, result) {
    // Save Tutorial in the database
    menuentry.create(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.findAll_Menuentry = function(req, result) {
    menuentry.findAll({
            order: [
                ['menuId', 'ASC']
            ],
        })
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

//////////////////// rowcount from db /////////////////////
exports.rowcount_Menuentry = function(req, result) {
    menuentry.findAll({})
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
exports.findMax_Menuentry = function(req, result) {

    db.sequelize.query("SELECT * FROM menuentries WHERE \"menuId\" = (SELECT max(\"menuId\" ) FROM menuentries )", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            result(null, properties)
        }).catch(err => {
            result(err, null)
        });
}

// delete unit entry
exports.delete_Menuentry = function(req, result) {
    menuentry.destroy({
            where: { menuId: req.params.id }
        })
        .then(num => {
            console.log(num)
            result(null, num)
        })
        .catch(err => {
            result(err, null)
        });
}


// update unit entry
exports.update_Menuentry = function(req, result) {
    menuentry.update(req.body, {
            where: { menuId: req.params.id }
        })
        .then(num => {
            result(null, num)
        })
        .catch(err => {
            result(err, null)
        });
}