const voucherService = require('../services/VoucherService');
const logger = require('../middleware/logger');

// Create and Save a new company 
exports.insert_voucher = (req, res) => {

    voucherService.insert_voucher(req, function(err, result) {
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

exports.rowcount_voucher = (req, res) => {

    voucherService.rowcount_voucher(req, function(err, result) {
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

exports.findMax_voucher = (req, res) => {

    voucherService.findMax_voucher(req, function(err, result) {
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

exports.get_voucher_by_vno = (req, res) => {

    voucherService.get_voucher_by_vno(req, function(err, result) {
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

exports.delete_voucher_by_vid = (req, res) => {

    voucherService.delete_voucher_by_vid(req, function(err, result) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        } else {
            res.send({ "msg": "ok" });
        }
        logger.log(req, result, err);
    })

};