module.exports = (sequelize, Sequelize) => {
    const permitYear = sequelize.define("permittedfinancialyear", {

        userid: {
            type: Sequelize.STRING
        },
        YEARCODE: {
            type: Sequelize.INTEGER
        },
        DESCRIPTION: {
            type: Sequelize.STRING
        },

    });

    return permitYear;
};