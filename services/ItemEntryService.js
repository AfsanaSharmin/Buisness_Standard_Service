const db = require("../SequelizeORM/sequelizeOrmIndex");
const itementry = db.itemEntry
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");

// suppliermaster1 entry
exports.create_item = function(req, result) {
    itementry.create(req.body)
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.findAll_Item = function(req, result) {
    itementry.findAll({
            order: [
                ['itemID', 'ASC']
            ],
        })
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

// delete item entry
exports.delete_Item = function(req, result) {
    itementry.destroy({
            where: { itemID: req.params.itemID }
        })
        .then(num => {
            var doc = {
                scount: 1
            };
            result(null, doc)
        })
        .catch(err => {
            result(err, null)
        });
}


// item edit
exports.update_Item = function(req, result) {
    itementry.update(req.body, {
            where: { itemID: req.params.itemID }
        })
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}


// root update
exports.update_Item_Root = function(req, result) {
    itementry.update({ LR: "R" }, {
            where: { itemID: req.params.itemID }
        })
        .then(data => {
            // console.log(num)
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

//

exports.parent_Duplicate = function(req, result) {
    itementry.findAll({
            where: { parent: req.params.parent },
            order: [
                ['itemID', 'ASC']
            ],
        })
        .then(data => {
            var l = data.length;
            var doc = {
                scount: 0
            }
            var doc2 = {
                scount: 1
            }
            if (l == 0) {
                result(null, doc)
            } else {
                result(null, doc2)
            }

        })
        .catch(err => {
            result(err, null)
        });
}

//leaf update
exports.update_Item_leaf = function(req, result) {
    itementry.update({ LR: "L" }, {
            where: { itemID: req.params.itemID }
        })
        .then(data => {
            // console.log(num)
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.find_ItembyItemId = function(req, result) {
    itementry.findAll({
            where: { itemID: req.params.itemID }
        })
        .then(data => {
            result(null, data)
        })
        .catch(err => {
            result(err, null)
        });
}

exports.findMax_item = function(req, result) {
    //SELECT * FROM public.itementries WHERE "itemID" =(SELECT max("itemID") FROM public.itementries) 

    db.sequelize.query("SELECT  * FROM public.itementries  WHERE \"itemID\" =(SELECT max(\"itemID\") FROM public.itementries) ", { type: db.Sequelize.QueryTypes.SELECT })
        .then(function(properties) {
            result(null, properties)
        }).catch(err => {
            result(err, null)
        });
}