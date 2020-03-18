module.exports = (sequelize, Sequelize) => {
    const procdetails = sequelize.define("procdetails", {

        invoiceID: {
            type: Sequelize.INTEGER,
        },
        itemID: {
            type: Sequelize.INTEGER,
        },
        cccode: {
            type: Sequelize.INTEGER,
        },
        quantity: {
            type: Sequelize.INTEGER,
        },
        rate: {
            type: Sequelize.INTEGER,
        },
        reqno: {
            type: Sequelize.INTEGER,
        },
        recQty: {
            type: Sequelize.INTEGER,
        },
        prevRecQty: {
            type: Sequelize.INTEGER,
        },
        totalWorkOrder: {
            type: Sequelize.INTEGER,
        }

    });

    return procdetails;
};