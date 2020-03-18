//const unit_entry = require('../model/unitEntry')
const db = require("../SequelizeORM/sequelizeOrmIndex");
const unit_entry = db.unit_entry;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
exports.create_unit = function(req, result) {
    // Create a Tutorial
    const unit = {
        uid: req.body.uid,
        uname: req.body.uname
    };

    // Save Tutorial in the database
    unit_entry.create(unit)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.findAll_Unit = function(req, result) {
    unit_entry.findAll({})
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

//////////////////// rowcount from db /////////////////////
exports.rowcount = function(req, result) {
    unit_entry.findAll({})
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
exports.findMax = function(req, result) {
    db.sequelize.query("SELECT max(uid) as uid FROM unit_entries;", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            // res.json(properties)
            result(null, properties)
        }).catch(err => {
            result(err, null)
        });
}

// delete unit entry
exports.deleteUnit = function(req, result) {
    unit_entry.destroy({
            where: { uid: req.params.uid }
        })
        .then(num => {
            console.log(num)
            result(null, num)
        })
        .catch(err => {
            result(err, null)
        });
}


// delete unit entry
exports.updateUnit = function(req, result) {
    unit_entry.update(req.body, {
            where: { uid: req.params.uid }
        })
        .then(num => {
            // console.log(num)
            result(null, num)
        })
        .catch(err => {
            result(err, null)
        });
}