const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("../model/tutorial")(sequelize, Sequelize);
db.unit_entry = require("../model/unitEntry")(sequelize, Sequelize);
db.ManufacturerEntry = require('../model/ManufacturerEntry')(sequelize, Sequelize);
db.supplier = require('../model/SupplierEntry')(sequelize, Sequelize);
db.supplier2 = require('../model/SupplierEntry2')(sequelize, Sequelize);
db.itemEntry = require('../model/ItemEntry')(sequelize, Sequelize);
db.openQty = require('../model/OpenQuantity')(sequelize, Sequelize);
db.compInfo = require('../model/CompanyInfo')(sequelize, Sequelize);
db.yearInfo = require('../model/YearInfo')(sequelize, Sequelize);
db.registerinfo = require('../model/RegisterUser')(sequelize, Sequelize);
db.menuentry = require('../model/MenuEntry')(sequelize, Sequelize);
db.permitBranch = require('../model/PermitBranch')(sequelize, Sequelize);
db.permitYear = require('../model/PermitFinancialYear')(sequelize, Sequelize);
db.permitMenu = require('../model/PermitMenu')(sequelize, Sequelize);
db.costcenter = require('../model/CostCenterEntry')(sequelize, Sequelize);
db.requisition = require('../model/RequisitionEntry')(sequelize, Sequelize);
db.procmaster = require('../model/ProcMaster')(sequelize, Sequelize);
db.voucher = require('../model/Voucher')(sequelize, Sequelize);
db.procdetails = require('../model/ProcDetails')(sequelize, Sequelize);
db.journal = require('../model/Journal')(sequelize, Sequelize);

module.exports = db;