module.exports = (sequelize, Sequelize) => {
    const item_unit_entry = sequelize.define("unit_entry", {
        uid: {
            type: Sequelize.INTEGER
        },
        uname: {
            type: Sequelize.STRING
        }

    });

    return item_unit_entry;
};