const db = require("../SequelizeORM/sequelizeOrmIndex");
const registerInfo = db.registerinfo;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
const config = require('../config/config');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.create_User = function(req, result) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    registerInfo.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            mobile: req.body.mobile
        })
        .then(user => {

            var token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            var response = { auth: true, token: token }
            return result(null, response)
        })
        .catch(err => {
            return result(err, null)
        });
}

exports.login_User = function(req, result) {

    registerInfo.findAll({
            where: { mobile: req.body.mobile }
        })
        .then(user => {
            console.log(user)
            if (user.length == 0) return result(null, { auth: false, msg: 'No user found.' });

            var passwordIsValid = bcrypt.compareSync(req.body.password, user[0].password);
            if (!passwordIsValid) return result(null, { auth: false, msg: 'password incorrect' });

            var token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });

            return result(null, { auth: true, token: token, mobile: user[0].mobile });
        })
        .catch(err => {
            return result(err, null)
        });
}

exports.findAll_User = function(req, result) {
    registerInfo.findAll({
            attributes: ['username', 'mobile']
        })
        .then(data => {
            return result(null, data)
        })
        .catch(err => {
            return result(err, null)
        });
}