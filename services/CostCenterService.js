const db = require("../SequelizeORM/sequelizeOrmIndex");
const costcenter = db.costcenter
const Op = db.Sequelize.Op;

//company info
exports.create_costcenter = function(req, result) {
    costcenter.create(req.body)
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}


exports.findAll_costcenter = function(req, result) {
    costcenter.findAll({
            order: [
                ['deptID', 'ASC']
            ],
        })
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}


// delete unit entry
exports.delete_costcenter = function(req, result) {
    costcenter.destroy({
            where: { deptID: req.params.deptID }
        })
        .then(num => {
            var doc = {
                scount: 1
            };
            return result(null, doc)
        })
        .catch(err => {
            return result(err, null)
        });
}

exports.update_costcenter_root = function(req, result) {
    costcenter.update({ LR: "R" }, {
            where: { deptID: req.params.deptID }
        })
        .then(num => {
            // console.log(num)
            return result(null, num)
        })
        .catch(err => {
            return result(err, null)
        });
}

exports.update_costcenter = function(req, result) {
    costcenter.update(req.body, {
            where: { deptID: req.params.deptID }
        })
        .then(num => {
            // console.log(num)
            return result(null, num)
        })
        .catch(err => {
            return result(err, null)
        });
}

// duplicate parent check
exports.costcenter_duplicate_parent_check = function(req, result) {
    costcenter.findAll({
            where: { parent: req.params.parent }
        })
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


exports.update_costcenter_child = function(req, result) {
    costcenter.update({ LR: "L" }, {
            where: { deptID: req.params.deptID }
        })
        .then(num => {

            return result(null, num)
        })
        .catch(err => {
            return result(err, null)
        });
}

exports.findAll_costcenter_deptid = function(req, result) {
    costcenter.findAll({
            where: { deptID: req.params.deptID }
        })
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}

///////////max value find from db
exports.findMax_maxDeptid_costcenter = function(req, result) {

    db.sequelize.query("SELECT * FROM costcenters WHERE \"deptID\" = (SELECT max(\"deptID\" ) FROM costcenters )", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            result(null, properties)
        }).catch(err => {
            result(err, null)
        });
}