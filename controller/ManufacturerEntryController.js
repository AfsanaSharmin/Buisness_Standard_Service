const ManufacturerService = require('../services/ManufacturerEntrySerice');
const logger = require('../middleware/logger');

// Create and Save a new unit 
exports.create_Manufacturer = (req, res) => {
    // Validate request
    if (!req.body.mname) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    ManufacturerService.create_Manufacturer(req, function(err, result) {
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
exports.findAll_Manufacturer = (req, res) => {
    ManufacturerService.findAll_Manufacturer(req, function(err, result) {
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
exports.rowcount_Manufacturer = (req, res) => {

    ManufacturerService.rowcount_Manufacturer(req, function(err, result) {
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


exports.findMax_Manufacturer = (req, res) => {

    ManufacturerService.findMax_Manufacturer(req, function(err, result) {
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



exports.delete_Manufacturer = (req, res) => {

    ManufacturerService.delete_Manufacturer(req, function(err, result) {
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



exports.update_Manufacturer = (req, res) => {

    ManufacturerService.update_Manufacturer(req, function(err, result) {
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