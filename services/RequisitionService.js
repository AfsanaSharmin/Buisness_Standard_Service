const db = require("../SequelizeORM/sequelizeOrmIndex");
const requisition = db.requisition
const Op = db.Sequelize.Op;

//company info
exports.create_requisition = function(req, result) {

    var reqlist = req.body;
    var l = reqlist.length;
    var count = 0;
    for (let i = 0; i < l; i++) {
        reqcheck(reqlist[i])
        count++;
        if (count == l) {
            return result(null, { 'message': 'ok' })

        }
    }

    function reqcheck(data) {

        requisition.findAll({
            where: {
                'itemID': data.itemID,
                'reqno': data.reqno,
                'cccode': data.cccode,
                'compid': data.compid,
                'compyearid': data.compyearid
            }
        }).then(res => {
            var l = res.length;
            if (l == 0) {
                gotoentry(data)
            } else {
                gotoupdate(res, data)
            }
        }).catch(err => {
            return result(err, null)
        });
    }

    function gotoentry(data) {
        requisition.create(data)
            .then(data => {

            }).catch(err => {
                return result(err, null)
            });
    }

    function gotoupdate(data, data2) {

        const quantity = Number(data2.quantity) + Number(data[0].quantity);
        requisition.update({ quantity: quantity }, {
                where: {
                    'itemID': data[0].itemID,
                    'reqno': data[0].reqno,
                    'cccode': data[0].cccode,
                    'compid': data[0].compid,
                    'compyearid': data[0].compyearid
                }
            })
            .then(data => {

            }).catch(err => {
                return result(err, null)
            });

    }
}

exports.find_requisition_forEdit = function(req, result) {
    requisition.findAll({
            where: { cccode: req.params.cccode, reqno: req.params.reqno }
        })
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}

exports.update_requisition = function(req, result) {
    requisition.update({ quantity: req.body.quantity }, {
            where: { id: req.params.id }
        })
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}

exports.delete_requisition = function(req, result) {
    requisition.destroy({
            where: { id: req.params.id }
        })
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}

exports.get_requisition_approvalData = function(req, result) {
    requisition.findAll({
            where: {
                reqno: req.params.reqno,
                compid: req.params.compid,
                compyearid: req.params.compyearid
            }
        })
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}

exports.update_requisition_approval = function(req, result) {
    requisition.update({
            appQuantity: req.body.appQuantity,
            mktRate: req.body.mktRate
        }, {
            where: { id: req.params.id }
        })
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}

exports.update_requisition_approval_edit = function(req, result) {
    requisition.update({
            appQuantity: req.body.appQuantity
        }, {
            where: { id: req.params.id }
        })
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}

// Select distinct(reqno) from requisitions where "appQuantity" > 0;

exports.get_allRequisition = function(req, result) {

    db.sequelize.query("SELECT distinct(reqno) from requisitions  WHERE \"appQuantity\" > 0 ", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            result(null, properties)
        }).catch(err => {
            result(err, null)
        });
}


exports.getall_requisitionData = function(req, result) {
    requisition.findAll({})
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}

exports.get_Requisition_for_workOrder = function(req, result) {

    requisition.findAll({
            appQuantity: { $gt: 0 },
            where: {
                reqno: req.params.reqno,
                compid: req.params.compid,
                compyearid: req.params.compyearid,

            }
        })
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}