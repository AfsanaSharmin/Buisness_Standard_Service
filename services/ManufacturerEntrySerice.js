//const unit_entry = require('../model/unitEntry')
const db = require("../SequelizeORM/sequelizeOrmIndex");
const manufacturerEntry = db.ManufacturerEntry;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
exports.create_Manufacturer = function(req, result) {
    // Create a Tutorial
    const unit = {
        mid: req.body.mid,
        mname: req.body.mname
    };

    // Save Tutorial in the database
    manufacturerEntry.create(unit)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.findAll_Manufacturer = function(req, result) {
    manufacturerEntry.findAll({
            order: [
                ['mid', 'ASC']
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
exports.rowcount_Manufacturer = function(req, result) {
    manufacturerEntry.findAll({})
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
exports.findMax_Manufacturer = function(req, result) {

    db.sequelize.query("SELECT max(mid) as mid FROM public.manufacturers", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            result(null, properties)
        }).catch(err => {
            result(err, null)
        });
}

// delete unit entry
exports.delete_Manufacturer = function(req, result) {
    manufacturerEntry.destroy({
            where: { mid: req.params.mid }
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
exports.update_Manufacturer = function(req, result) {
    manufacturerEntry.update(req.body, {
            where: { mid: req.params.mid }
        })
        .then(num => {
            // console.log(num)
            result(null, num)
        })
        .catch(err => {
            result(err, null)
        });
}