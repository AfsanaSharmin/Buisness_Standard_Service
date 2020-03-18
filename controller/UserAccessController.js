const userAccess = require('../services/UserAccessService');
const logger = require('../middleware/logger');

// Create and Save a new company 
exports.permit_Branch = (req, res) => {

    userAccess.permit_Branch(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send({ "success": true, "message": "Insert Successfully" });
        }
        logger.log(req, result, err);
    })

};
exports.delete_permitBranch = (req, res) => {

    userAccess.delete_permitBranch(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send({ "success": true, "message": "Delete Successfully" })
                // res.send(result);
        }
        logger.log(req, result, err);
    })

};
exports.get_permit_Branch = (req, res) => {

    userAccess.get_permit_Branch(req, function(err, result) {
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



exports.permit_Year = (req, res) => {

    userAccess.permit_Year(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send({ "success": true, "message": "Insert Successfully" });
        }
        logger.log(req, result, err);
    })

};
exports.delete_permitYear = (req, res) => {

    userAccess.delete_permitYear(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send({ "success": true, "message": "Delete Successfully" });
        }
        logger.log(req, result, err);
    })

};
exports.get_permit_Year = (req, res) => {

    userAccess.get_permit_Year(req, function(err, result) {
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

////////////////////////////////////////////////////////////
exports.permit_Menu = (req, res) => {

    userAccess.permit_Menu(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send({ "success": true, "message": "Insert Successfully" });
        }
        logger.log(req, result, err);
    })

};
exports.delete_permit_Menu = (req, res) => {

    userAccess.delete_permit_Menu(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send({ "success": true, "message": "Delete Successfully" });
        }
        logger.log(req, result, err);
    })

};
exports.get_permit_Menu = (req, res) => {

    userAccess.get_permit_Menu(req, function(err, result) {
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