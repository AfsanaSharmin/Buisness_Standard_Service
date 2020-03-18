module.exports = (sequelize, Sequelize) => {
    const supplier = sequelize.define("suppliermaster1", {

        supplier_Id: {
            type: Sequelize.INTEGER

        },
        supplier_Name: {
            type: Sequelize.STRING
        },
        supplier_ShortName: {
            type: Sequelize.STRING
        },
        supplier_Passport: {
            type: Sequelize.STRING
        },
        supplier_NID: {
            type: Sequelize.STRING
        },
        supplier_Type_Id: {
            type: Sequelize.STRING
        },
        business_Category: {
            type: Sequelize.STRING
        },
        product_Service: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        fax: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        web_address: {
            type: Sequelize.STRING
        },
        house: {
            type: Sequelize.STRING
        },
        road: {
            type: Sequelize.STRING
        },
        sector: {
            type: Sequelize.STRING
        },
        area_Id: {
            type: Sequelize.INTEGER
        },
        zone_Id: {
            type: Sequelize.INTEGER
        },
        city_Id: {
            type: Sequelize.INTEGER
        },
        thana_Id: {
            type: Sequelize.STRING
        },
        district_Id: {
            type: Sequelize.INTEGER
        },
        country_Id: {
            type: Sequelize.INTEGER
        },
        zipCode_Id: {
            type: Sequelize.STRING
        },
        contact_Person: {
            type: Sequelize.STRING
        },
        designation: {
            type: Sequelize.STRING
        },
        vat_Reg: {
            type: Sequelize.STRING
        },
        BIN: {
            type: Sequelize.INTEGER
        },
        ETIN: {
            type: Sequelize.STRING
        },
        TDS_Entity: {
            type: Sequelize.INTEGER
        },
        supplier_Type_Name: {
            type: Sequelize.STRING
        },
        city_Name: {
            type: Sequelize.STRING
        },
        district_Name: {
            type: Sequelize.STRING
        },
        country_Name: {
            type: Sequelize.STRING
        },
        supplier_Code: {
            type: Sequelize.INTEGER
        }

    });

    return supplier;
};