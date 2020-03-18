module.exports = (sequelize, Sequelize) => {
    const requisition = sequelize.define("requisition", {

        reqno: {
            type: Sequelize.INTEGER,

        },
        reqMonth: {
            type: Sequelize.INTEGER
        },
        reqYear: {
            type: Sequelize.INTEGER
        },
        itemID: {
            type: Sequelize.INTEGER
        },
        cccode: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        QUnit: {
            type: Sequelize.STRING
        },
        appQuantity: {
            type: Sequelize.INTEGER
        },
        ITEMNAME: {
            type: Sequelize.STRING
        },
        reqDate: {
            type: Sequelize.STRING
        },
        totalWO: {
            type: Sequelize.STRING
        },
        rate: {
            type: Sequelize.INTEGER
        },
        recQty: {
            type: Sequelize.INTEGER
        },
        delQty: {
            type: Sequelize.INTEGER
        },
        facRecQty: {
            type: Sequelize.INTEGER
        },
        cashAppQty: {
            type: Sequelize.INTEGER
        },
        cashWoQty: {
            type: Sequelize.INTEGER
        },
        cashRecQty: {
            type: Sequelize.INTEGER
        },
        mktRate: {
            type: Sequelize.INTEGER
        },
        compid: {
            type: Sequelize.INTEGER
        },
        compyearid: {
            type: Sequelize.INTEGER
        }


    });

    return requisition;
};