module.exports = (sequelize, Sequelize) => {
    const menuentry = sequelize.define("menuentry", {


        mainmenuid: {
            type: Sequelize.INTEGER
        },
        mainmenu: {
            type: Sequelize.STRING
        },
        menuId: {
            type: Sequelize.INTEGER,

        },
        MenuName: {
            type: Sequelize.STRING,

        },
        NavUrl: {
            type: Sequelize.STRING
        }


    });

    return menuentry;
};