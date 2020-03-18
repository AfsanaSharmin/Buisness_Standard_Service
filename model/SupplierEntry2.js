module.exports = (sequelize, Sequelize) => {

    const supplier2 = sequelize.define("suppliermaster2", {
        supplier_Id: {
            type: Sequelize.INTEGER,
        },
        bank_Id: {
            type: Sequelize.INTEGER
        },
        branch: {
            type: Sequelize.STRING,
        },
        acc_Name: {
            type: Sequelize.STRING,
        },
        acc_No: {
            type: Sequelize.BIGINT,
        },
        routing_No: {
            type: Sequelize.STRING,
        },
        swift_Code: {
            type: Sequelize.STRING,
        },
        doc_Code: {
            type: Sequelize.INTEGER,
        },
        doc_Details: {
            type: Sequelize.STRING,
        },
        doc_Reference: {
            type: Sequelize.STRING,
        },
        doc_type: {
            type: Sequelize.STRING,
        }

    });

    return supplier2;
}