module.exports = (sequelize, Sequelize) => {
    const ManufacturerEntry = sequelize.define("manufacturer", {
        mid: {
            type: Sequelize.INTEGER
        },
        mname: {
            type: Sequelize.STRING
        }

    });

    return ManufacturerEntry;
};