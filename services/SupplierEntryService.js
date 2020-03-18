const db = require("../SequelizeORM/sequelizeOrmIndex");
const supplier = db.supplier;
const supplier2 = db.supplier2;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");

// suppliermaster1 entry
exports.create_supplier = function(req, result) {
    supplier.create(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}


// suppliermaster2 entry
exports.create_supplier2 = function(req, result) {
    supplier2.create(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}


// find all supplier information from supplieraster1
exports.findAll_Supplier = function(req, result) {
    supplier.findAll({
            order: [
                ['supplier_Id', 'ASC']
            ],
        })
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

// find supplier by supplier_id
exports.find_supplierName = function(req, result) {
    supplier.findAll({
            where: ['supplier_Id', req.params.supplier_Id]
        })
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}