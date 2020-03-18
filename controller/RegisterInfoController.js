const registerInfoService = require('../services/RegisterInfoServices');
const logger = require('../middleware/logger');

// Create and Save a new company 
exports.create_User = (req, res) => {

    registerInfoService.create_User(req, function(err, result) {
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

exports.login_User = (req, res) => {
    console.log('cont')
    registerInfoService.login_User(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.json(result);
        }
        logger.log(req, result, err);
    })

};

exports.findAll_User = (req, res) => {
    console.log('cont')
    registerInfoService.findAll_User(req, function(err, result) {
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