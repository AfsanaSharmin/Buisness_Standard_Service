module.exports = (sequelize, Sequelize) => {
    const itemEntry = sequelize.define("itementry", {
        itemID: {
            type: Sequelize.INTEGER,
        },
        itemCode: {
            type: Sequelize.STRING
        },
        itemName: {
            type: Sequelize.STRING,
            unique: true,
            required: true
        },
        parent: {
            type: Sequelize.INTEGER
        },
        TopParent: {
            type: Sequelize.INTEGER
        },
        LR: {
            type: Sequelize.STRING
        },
        depth: {
            type: Sequelize.INTEGER
        },
        createDate: {
            type: Sequelize.STRING
        },
        specification: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        countryOfOrigin: {
            type: Sequelize.STRING
        },
        importance: {
            type: Sequelize.STRING
        },
        parts: {
            type: Sequelize.STRING
        },
        manufacturer: {
            type: Sequelize.STRING
        },
        categorization: {
            type: Sequelize.STRING
        },
        maxConsump: {
            type: Sequelize.STRING
        },
        minConsump: {
            type: Sequelize.STRING
        },
        avgConsump: {
            type: Sequelize.STRING
        },
        leadTime: {
            type: Sequelize.STRING
        },
        reOrderLevel: {
            type: Sequelize.STRING
        },
        maxStockQty: {
            type: Sequelize.STRING
        },
        minStockQty: {
            type: Sequelize.STRING
        },
        stafyStockQty: {
            type: Sequelize.STRING
        },
        unitOfMeasurement: {
            type: Sequelize.STRING
        },
        currency: {
            type: Sequelize.STRING
        },
        avgCostPUnit: {
            type: Sequelize.STRING
        },
        orderingCostPUnit: {
            type: Sequelize.STRING
        },
        carryingCostPUnit: {
            type: Sequelize.STRING
        },
        lastPurCostPUnit: {
            type: Sequelize.STRING
        },
        QUnit: {
            type: Sequelize.STRING
        },
        CUnit: {
            type: Sequelize.STRING
        }
    });

    return itemEntry;
};