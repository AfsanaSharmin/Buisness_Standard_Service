const openQtyService = require('../services/OpenQuantityService');
const logger = require('../middleware/logger');

// Create and Save a new unit 
exports.create_OpenQty = (req, res) => {

    openQtyService.create_OpenQty(req, function(err, result) {
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

exports.findMax_OpenQty = (req, res) => {

    openQtyService.findMax_OpenQty(req, function(err, result) {
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

exports.rowcount_OpenQty = (req, res) => {

    openQtyService.rowcount_OpenQty(req, function(err, result) {
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