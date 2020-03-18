const costcenterService = require('../services/CostCenterService');
const logger = require('../middleware/logger');

// Create and Save a new company 
exports.create_costcenter = (req, res) => {

    costcenterService.create_costcenter(req, function(err, result) {
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

exports.findAll_costcenter = (req, res) => {

    costcenterService.findAll_costcenter(req, function(err, result) {
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

exports.delete_costcenter = (req, res) => {

    costcenterService.delete_costcenter(req, function(err, result) {
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

exports.update_costcenter_root = (req, res) => {

    costcenterService.update_costcenter_root(req, function(err, result) {
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

exports.update_costcenter = (req, res) => {

    costcenterService.update_costcenter(req, function(err, result) {
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

exports.costcenter_duplicate_parent_check = (req, res) => {

    costcenterService.costcenter_duplicate_parent_check(req, function(err, result) {
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

exports.update_costcenter_child = (req, res) => {

    costcenterService.update_costcenter_child(req, function(err, result) {
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

exports.findAll_costcenter_deptid = (req, res) => {

    costcenterService.findAll_costcenter_deptid(req, function(err, result) {
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

exports.findMax_maxDeptid_costcenter = (req, res) => {

    costcenterService.findMax_maxDeptid_costcenter(req, function(err, result) {
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