module.exports = (sequelize, Sequelize) => {
    const journal = sequelize.define("journal", {

        SERIAL: {
            type: Sequelize.INTEGER,
        },
        VID: {
            type: Sequelize.INTEGER,
        },
        ACCID: {
            type: Sequelize.INTEGER,
        },
        DRCR: {
            type: Sequelize.STRING,
        },
        AMOUNT: {
            type: Sequelize.INTEGER,
        },
        DRCRID: {
            type: Sequelize.INTEGER,
        },
        MRNO: {
            type: Sequelize.INTEGER,
        },
        COMPID: {
            type: Sequelize.INTEGER,
        },
        COMPYEARID: {
            type: Sequelize.INTEGER,
        }

    });

    return journal;
};