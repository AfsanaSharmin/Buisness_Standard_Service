module.exports = (sequelize, Sequelize) => {
    const permitBranch = sequelize.define("permittedbranch", {

        userid: {
            type: Sequelize.STRING
        },
        COMPCODE: {
            type: Sequelize.INTEGER
        },
        COMPNAME: {
            type: Sequelize.STRING
        },

    });

    return permitBranch;
};