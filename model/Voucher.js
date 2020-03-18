module.exports = (sequelize, Sequelize) => {
    const voucher = sequelize.define("voucher", {


        VID: {
            type: Sequelize.INTEGER,
            // require: true
        },
        VDATE: {
            type: Sequelize.STRING,
        },
        VTYPE: {
            type: Sequelize.INTEGER,
        },
        VNO: {
            type: Sequelize.STRING,
        },
        AutoVNO: {
            type: Sequelize.INTEGER,
        },
        POSTED: {
            type: Sequelize.STRING,
        },
        USERID: {
            type: Sequelize.STRING,
        },
        STATUS: {
            type: Sequelize.INTEGER,
        },
        PARTICULARS: {
            type: Sequelize.STRING,
        },
        COMPID: {
            type: Sequelize.INTEGER,
        },
        COMPYEARID: {
            type: Sequelize.INTEGER,
        }

    });

    return voucher;
};