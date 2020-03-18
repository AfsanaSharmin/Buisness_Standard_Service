const supplierService = require('../services/SupplierEntryService');
const logger = require('../middleware/logger');

exports.create_supplier = (req, res) => {

    supplierService.create_supplier(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send(result);
        }
        logger.log(req, result, err);
    })

};


exports.create_supplier2 = (req, res) => {

    supplierService.create_supplier2(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send(result);
        }
        logger.log(req, result, err);
    })

};

// get all supplier
exports.findAll_Supplier = (req, res) => {
    supplierService.findAll_Supplier(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send(result);
        }
        logger.log(req, result, err);
    })
};


// get suppliername by supplierid
exports.find_SupplierName = (req, res) => {
    supplierService.find_SupplierName(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send(result);
        }
        logger.log(req, result, err);
    })
};