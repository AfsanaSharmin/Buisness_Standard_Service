const unitService = require('../services/UnitEntryService');
const logger = require('../middleware/logger');

// Create and Save a new unit 
exports.create = (req, res) => {
    // Validate request
    if (!req.body.uname) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    unitService.create_unit(req, function(err, result) {
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

// get all unit entries
exports.findAllUnit = (req, res) => {
    unitService.findAll_Unit(req, function(err, result) {
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

//
exports.rowcount = (req, res) => {

    unitService.rowcount(req, function(err, result) {
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


exports.findMax = (req, res) => {

    unitService.findMax(req, function(err, result) {
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



exports.deleteUnit = (req, res) => {

    unitService.deleteUnit(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send({ "m": 'ok' }); // for json format
        }
        logger.log(req, result, err);
    })
};



exports.updateUnit = (req, res) => {

    unitService.updateUnit(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send(result); // for json format
        }
        logger.log(req, result, err);
    })
};