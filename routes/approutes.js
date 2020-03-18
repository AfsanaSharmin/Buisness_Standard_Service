const express = require('express');
const router = express.Router();
var crud = require('../controller/crudController');
const tutorials = require("../controller/tutorialController");
const unitEntry = require("../controller/UnitEntryController");
const manufacturer = require("../controller/ManufacturerEntryController");
const itemEntry = require("../controller/ItemEntryController");
const supplier = require("../controller/SupplierEntryController");
const openQty = require("../controller/OpenQuantityController");
const compinfo = require("../controller/CompanyInfoController");
const yearInfo = require("../controller/YearInfoController");
const registerinfo = require("../controller/RegisterInfoController");
const menuentry = require("../controller/MenuEntryController");
const userAccess = require("../controller/UserAccessController");
const costcenter = require("../controller/CostCenterController");
const requisition = require("../controller/RequisitionController");
const procmaster = require("../controller/ProcMasterController");
const voucher = require("../controller/VoucherController");
const procdetails = require("../controller/ProcDetailsController");
const journal = require("../controller/JournalController");


router.route('/crud/insert').post(crud.crud_create);
router.route('/crud/getall').get(crud.getUsers);
///////////// follow the crud operation using orm //////////////////////////////////////
router.post("/tutorials", tutorials.create);
// Retrieve all Tutorials
router.get("/tutorials", tutorials.findAll);
// Retrieve all published Tutorials
router.get("/tutorials/published", tutorials.findAllPublished);
// Retrieve a single Tutorial with id
router.get("/tutorials/:id", tutorials.findOne);
// Update a Tutorial with id
router.put("/tutorials/:id", tutorials.update);
// Delete a Tutorial with id
router.delete("/tutorials/:id", tutorials.delete);
// Create a new Tutorial
router.delete("/tutorials", tutorials.deleteAll);

////////////////////////// Unit entry //////////////////////
router.post('/unit/save', unitEntry.create);
router.get('/unit/all', unitEntry.findAllUnit);
router.get('/unit/rowcount', unitEntry.rowcount);
router.get('/unit/max', unitEntry.findMax);
router.delete('/unit/delete/:uid', unitEntry.deleteUnit);
router.put('/unit/update/:uid', unitEntry.updateUnit);
///////////////////////////////////////////////////////////////

////////////////// Manufacturer Entry /////////////////////////
router.post('/manufacturer/save', manufacturer.create_Manufacturer);
router.get('/manufacturer/all', manufacturer.findAll_Manufacturer);
router.get('/manufacturer/rowcount', manufacturer.rowcount_Manufacturer);
router.get('/manufacturer/max', manufacturer.findMax_Manufacturer);
router.delete('/manufacturer/delete/:mid', manufacturer.delete_Manufacturer);
router.put('/manufacturer/update/:mid', manufacturer.update_Manufacturer);
///////////////////////////////////////////////////////////////

///////////// Supplier Entry //////////////////////////////////
router.post('/supplier/save', supplier.create_supplier);
router.post('/supplier2/save', supplier.create_supplier2);
router.get('/supplier/all', supplier.findAll_Supplier);
router.get('/supplier/name/:supplier_Id', supplier.find_SupplierName);
//////////////////////////////////////////////////////////////

//////////////////// Item Entry //////////////////////////////////
router.post('/item/save', itemEntry.create_item);
router.get('/item/all', itemEntry.findAll_Item);
router.delete('/item/delete/:itemID', itemEntry.delete_Item);
router.put('/item/root/update/:itemID', itemEntry.update_Item_Root);
router.put('/item/edit/:itemID', itemEntry.update_Item);
router.get('/item/parent/duplicate/:parent', itemEntry.parent_Duplicate);
router.get('/item/lr/update/:itemID', itemEntry.update_Item_leaf);
router.get('/items/find/:itemID', itemEntry.find_ItembyItemId);
router.get('/item/id/max', itemEntry.findMax_item);
//// /API/v1/getInfoForItemDelete/:itemID (not done this api.For delete any )
//////////////////////////////////////////////////////////////////

////////////////////// OpenQuantity //////////////////////////////////
router.post('/API/v1/insertIntoOpenQty', openQty.create_OpenQty);
router.get('/API/v1/getMaxOpenQtyId', openQty.findMax_OpenQty);
router.get('/API/v1/getOpenQtyRowCount', openQty.rowcount_OpenQty);
//////////////////////////////////////////////////////////////////////

///////////////////////// company info //////////////////////////////////
router.post('/compinfo/post', compinfo.create_company);
router.get('/compinfo/rowcount', compinfo.rowcount_Compinfo);
router.get('/compinfo/v1/getallcompany', compinfo.findAll_Company);
router.get('/compinfo/max', compinfo.findMax_CompanyCode);
router.get('/api/v1/getMaxCompID', compinfo.findMax_Company_openBalance);
//////////////////////////////////////////////////////////////////////////

/////////////////////////// Year Info //////////////////////////////////
router.post('/API/v1/insertIntoYearInfo', yearInfo.create_year);
router.get('/API/v1/getAllYearInfo', yearInfo.findAll_Year);
router.get('/yearinfo/v1/getallyear', yearInfo.findAll_Year);
router.get('/API/v1/getInfoByYearCode/:yearcode', yearInfo.getBy_YearCode);
router.get('/yearinfo/startdate/enddate/:yearcode', yearInfo.getBy_YearCode);
router.get('/api/v1/getMaxYearID', yearInfo.findMax_yearinfo);
//////////////////////////////////////////////////////////////////////////

////////////////////////// Register Info /////////////////////////////////
router.post('/api/RegisterAccountByAdmin', registerinfo.create_User);
router.post('/Account/Login', registerinfo.login_User);
router.get('/registerinfo/v1/getalluser', registerinfo.findAll_User);
/////////////////////////////////////////////////////////////////////////

////////////////////////// Menuentry ////////////////////////////////
router.post('/API/v1/insertIntoMenuEntry', menuentry.create_Menuentry);
router.get('/API/v1/getAllMenu', menuentry.findAll_Menuentry);
router.get('/API/v1/getMenuEntryRowCount', menuentry.rowcount_Menuentry);
router.get('/API/v1/getMenuEntryMaxRow', menuentry.findMax_Menuentry);
router.delete('/API/v1/deleteMenuEntry/:id', menuentry.delete_Menuentry);
router.put('/API/v1/updateMenuEntry/:id', menuentry.update_Menuentry);
/////////////////////////////////////////////////////////////////////////

////////////////////////// User Access ////////////////////////////////

router.post('/branchpermit/v1/insertbranch', userAccess.permit_Branch);
router.get('/branchlist/v1/getByuserid/:userid', userAccess.get_permit_Branch);
router.delete('/branches/v1/delete/byuserid/:userid', userAccess.delete_permitBranch);

router.post('/financialyear/v1/insertpermittedyear', userAccess.permit_Year);
router.get('/financialyear/v1/getByuserid/:userid', userAccess.get_permit_Year);
router.delete('/financialyear/v1/delete/byuserid/:userid', userAccess.delete_permitYear);

router.post('/insertMenu', userAccess.permit_Menu);
router.get('/menuList/v1/getByuserid/:userid', userAccess.get_permit_Menu);
router.delete('/previous/menu/delete/byuserid/:userid', userAccess.delete_permit_Menu);
/////////////////////////////////////////////////////////////////////////

//////////////////// cost center entry ////////////////////////////////////////
router.post('/cost/centre/save', costcenter.create_costcenter);
router.get('/cost/centre/all', costcenter.findAll_costcenter);
router.delete('/cost/centre/delete/:deptID', costcenter.delete_costcenter);
router.put('/cost/centre/root/update/:deptID', costcenter.update_costcenter_root);
router.put('/cost/centre/edit/:deptID', costcenter.update_costcenter);
router.get('/cost/centre/parent/duplicate/:parent', costcenter.costcenter_duplicate_parent_check);
router.put('/cost/centre/lr/update/:deptID', costcenter.update_costcenter_child);
router.get('/cost/centre/find/:deptID', costcenter.findAll_costcenter_deptid);
router.get('/cost/centre/id/max', costcenter.findMax_maxDeptid_costcenter);
//////////////////////////////////////////////////////////
//////////////////// requisition /////////////////////////////
router.post('/API/v1/insertIntoRequisition', requisition.create_requisition);
router.get('/API/v1/getDataForRequisitionEdit/:reqno/:cccode', requisition.find_requisition_forEdit);
router.put('/API/v1/updateQuantityForRequisitionUpdate/:id', requisition.update_requisition);
router.delete('/API/v1/deleteRequisition/:id', requisition.delete_requisition);
router.delete('/requisition/all', requisition.delete_requisition);
/////////////// requisition approval ///////////////////////////////////////
router.get('/API/v1/getRequisitionForRequisitionApproval/:reqno/:compid/:compyearid', requisition.get_requisition_approvalData);
router.put('/API/v1/updateRequisitionForRequisitionApproval/:id', requisition.update_requisition_approval);
router.get('/requisition/all', requisition.get_allRequisition);
router.get('/API/v1/getAllRequisitionInfo', requisition.getall_requisitionData);
router.get('/API/v1/getRequisitionForWorkOrder/:reqno/:compid/:compyearid', requisition.get_Requisition_for_workOrder);

/////////////////////// Procmaster (work order) /////////////////////////////////
router.post('/API/v1/insertIntoProcMaster', procmaster.create_procmaster);
router.get('/proc/master/max', procmaster.procmaster_max_row);
router.get('/proc/master/rowcount', procmaster.procmaster_row_check);
router.put('/procurement/update/:id', procmaster.update_procmaster);

///////////////////////////////////////////////////////////////////////////

///////////////////proc details(work order) ////////////////////////////////
router.post('/API/v1/insertIntoProcDetails', procdetails.insert_ProcDetails);
router.get('API/v1/getAllProcDetailsInfo', procdetails.getAllProcDetails);

////////////////////////////////////////////////////////////////////////////

//////////////////// Voucher Entry //////////////////////////////////
router.post('/API/v1/insertIntoVoucher', voucher.insert_voucher);
router.get('/API/v1/getVoucherRowCount', voucher.rowcount_voucher);
router.get('/API/v1/getMaxVoucherId', voucher.findMax_voucher);
router.post('/API/v1/getVoucherInfoFromVno', voucher.get_voucher_by_vno);
router.delete('/API/v1/deleteVoucherInfo/:VID', voucher.delete_voucher_by_vid);
///// voucher entry for accounts /////////////////
router.post('/voucher/post', voucher.insert_voucher);
router.get('/voucher/rowcount', voucher.rowcount_voucher);
router.get('/voucher/max', voucher.findMax_voucher);

//////////////////////////////////////////////////////////////////////
////////////////////////////Journal Entry////////////////////////////////////
router.post('/API/v1/insertIntoJournal', journal.insert_Journal);
//////////////////////////////////////////////////////////////////////

module.exports = router;