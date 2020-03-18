module.exports = (sequelize, Sequelize) => {
    const registration = sequelize.define("registerinfo", {


        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING,
            required: [true, "Mobile no is required"]
        },
        image: {
            type: Sequelize.STRING

        },
        password: {
            type: Sequelize.STRING,
            required: [true, "password is required"]
        },

        actorId: {
            type: Sequelize.INTEGER,
            default: 1
        }

    });

    return registration;
};