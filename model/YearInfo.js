module.exports = (sequelize, Sequelize) => {
    const yearInfo = sequelize.define("yearinfo", {

        YEARCODE: { type: Sequelize.INTEGER },
        OPENINGFIELD: { type: Sequelize.STRING },
        STARTDATE: { type: Sequelize.STRING },
        ENDDATE: { type: Sequelize.STRING },
        DESCRIPTION: { type: Sequelize.STRING },
        STATUS: { type: Sequelize.STRING }

    });

    return yearInfo;
};