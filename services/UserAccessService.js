const db = require("../SequelizeORM/sequelizeOrmIndex");
const permitBranch = db.permitBranch;
const permitYear = db.permitYear;
const permitMenu = db.permitMenu;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
const config = require('../config/config');

////////////// branch access //////////////////
exports.permit_Branch = function(req, result) {

    permitBranch.bulkCreate(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.get_permit_Branch = function(req, result) {
    permitBranch.findAll({
            where: { userid: req.params.userid }
        })
        .then(num => {

            result(null, num)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.delete_permitBranch = function(req, result) {
        permitBranch.destroy({
                where: { userid: req.params.userid }
            })
            .then(num => {
                result(null, num)
            })
            .catch(err => {
                result(err, null)
            });
    }
    ///////////////////////////////////////////////////

//////////////////// Financial Year Access ///////////

exports.permit_Year = function(req, result) {

    permitYear.bulkCreate(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.get_permit_Year = function(req, result) {
    permitYear.findAll({
            where: { userid: req.params.userid }
        })
        .then(num => {

            result(null, num)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.delete_permitYear = function(req, result) {
        permitYear.destroy({
                where: { userid: req.params.userid }
            })
            .then(num => {

                result(null, num)
            })
            .catch(err => {
                result(err, null)
            });
    }
    /////////////////////////////////////////////////////


//////////////////// Menu Entry Access ///////////

exports.permit_Menu = function(req, result) {

    permitMenu.bulkCreate(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.get_permit_Menu = function(req, result) {
    permitMenu.findAll({
            where: { userid: req.params.userid }
        })
        .then(num => {

            result(null, num)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.delete_permit_Menu = function(req, result) {
        permitMenu.destroy({
                where: { userid: req.params.userid }
            })
            .then(num => {

                result(null, num)
            })
            .catch(err => {
                result(err, null)
            });
    }
    ////////////////////////////////////////////