module.exports = (sequelize, Sequelize) => {
    const procmaster = sequelize.define("procmaster", {


        invoiceID: {
            type: Sequelize.INTEGER,
        },
        invoiceNO: {
            type: Sequelize.STRING
        },
        procType: {
            type: Sequelize.INTEGER,
        },
        procDate: {
            type: Sequelize.STRING
        },
        procOfficer: {
            type: Sequelize.STRING
        },
        supplierID: {
            type: Sequelize.INTEGER,
        },
        procPlace: {
            type: Sequelize.STRING
        },
        payAmt: {
            type: Sequelize.INTEGER,
        }

    });

    return procmaster;
};