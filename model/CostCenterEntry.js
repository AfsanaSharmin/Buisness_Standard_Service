module.exports = (sequelize, Sequelize) => {
    const costcenter = sequelize.define("costcenter", {

        deptID: {
            type: Sequelize.INTEGER,
        },
        deptCode: {
            type: Sequelize.STRING
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
        deptName: {
            type: Sequelize.STRING
        },

    });

    return costcenter;
};