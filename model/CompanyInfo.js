module.exports = (sequelize, Sequelize) => {
    const compInfo = sequelize.define("companyinfo", {

        ID: { type: Sequelize.INTEGER },
        COMPCODE: { type: Sequelize.INTEGER },
        COMPNAME: { type: Sequelize.STRING },
        ADDRESS: { type: Sequelize.STRING },
        PHONE: { type: Sequelize.STRING },
        FAX: { type: Sequelize.STRING },
        EMAIL: { type: Sequelize.STRING },
        WEBADDR: { type: Sequelize.STRING },
        CONTACT_PERSON: { type: Sequelize.STRING }

    });

    return compInfo;
};