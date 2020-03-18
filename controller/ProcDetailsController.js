const procDetailService = require('../services/ProcDetailsService');
const logger = require('../middleware/logger');

// Create and Save a new company 
exports.insert_ProcDetails = (req, res) => {

    procDetailService.insert_ProcDetails(req, function(err, result) {
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

exports.getAllProcDetails = (req, res) => {

    procDetailService.getAllProcDetails(req, function(err, result) {
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