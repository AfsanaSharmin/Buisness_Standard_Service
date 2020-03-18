module.exports = (sequelize, Sequelize) => {
    const permitMenu = sequelize.define("permittedmenu", {
        userid: { type: Sequelize.STRING },

        menuId: {
            type: Sequelize.INTEGER,
            required: [true, "MenuId  is required"]
        },
        MenuName: {
            type: Sequelize.STRING,

            required: [true, "MenuName is required"]
        },
        NavUrl: {
            type: Sequelize.STRING
        },
        mainmenuid: {
            type: Sequelize.INTEGER,
        }

    });

    return permitMenu;
};