const menuentryService = require('../services/MenuEntryService');
const logger = require('../middleware/logger');

// Create and Save a new company 
exports.create_Menuentry = (req, res) => {

    menuentryService.create_Menuentry(req, function(err, result) {
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

exports.findAll_Menuentry = (req, res) => {

    menuentryService.findAll_Menuentry(req, function(err, result) {
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

exports.rowcount_Menuentry = (req, res) => {

    menuentryService.rowcount_Menuentry(req, function(err, result) {
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

exports.findMax_Menuentry = (req, res) => {

    menuentryService.findMax_Menuentry(req, function(err, result) {
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

exports.update_Menuentry = (req, res) => {

    menuentryService.update_Menuentry(req, function(err, result) {
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

exports.delete_Menuentry = (req, res) => {

    menuentryService.delete_Menuentry(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send({ "m": 'ok' });
        }
        logger.log(req, result, err);
    })

};