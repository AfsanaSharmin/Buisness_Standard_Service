module.exports = (sequelize, Sequelize) => {
    const openQty = sequelize.define("openquantity", {

        qtyID: {
            type: Sequelize.INTEGER
        },
        itemID: {
            type: Sequelize.INTEGER
        },
        ITEMNAME: {
            type: Sequelize.STRING
        },
        openBalance: {
            type: Sequelize.INTEGER
        },
        parent: {
            type: Sequelize.INTEGER
        },
        compid: {
            type: Sequelize.INTEGER
        },
        compyearid: {
            type: Sequelize.INTEGER
        }

    });

    return openQty;
};