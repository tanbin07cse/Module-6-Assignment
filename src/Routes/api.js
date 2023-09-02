const express = require('express');

const router = express.Router();
const DemoController = require('../Controllers/blogController');
const DemoController2 = require('../controllers/blogDetailsController');
const DemoController3 = require('../controllers/commentController');
const DemoController4 = require('../controllers/messageController');
const DemoController5 = require('../controllers/portfolioController');
const DemoController6 = require('../controllers/productController');
const DemoController7 = require('../controllers/profitController');
const DemoController8 = require('../controllers/projectController');
const DemoController9 = require('../controllers/serviceController');
const DemoController10 = require('../controllers/titleController');


router.get('/blogController/create',DemoController.create);
router.get('/blogController/read',DemoController.read);
router.get('/blogController/delete',DemoController.delete);
router.get('/blogController/update',DemoController.update);

router.get('/blogDetailsController/create',DemoController2.create);
router.get('/blogDetailsController/read',DemoController2.read);
router.get('/blogDetailsController/delete',DemoController2.delete);
router.get('/blogDetailsController/update',DemoController2.update);

router.get('/commentController/create',DemoController3.create);
router.get('/commentController/read',DemoController3.read);
router.get('/commentController/delete',DemoController3.delete);
router.get('/commentController/update',DemoController3.update);

router.get('/messageController/create',DemoController4.create);
router.get('/messageController/read',DemoController4.read);
router.get('/messageController/delete',DemoController4.delete);
router.get('/messageController/update',DemoController4.update);

router.get('/portfolioController/create',DemoController5.create);
router.get('/portfolioController/read',DemoController5.read);
router.get('/portfolioController/delete',DemoController5.delete);
router.get('/portfolioController/update',DemoController5.update);

router.get('/productController/create',DemoController6.create);
router.get('/productController/read',DemoController6.read);
router.get('/productController/delete',DemoController6.delete);
router.get('/productController/update',DemoController6.update);

router.get('/profitController/create',DemoController7.create);
router.get('/profitController/read',DemoController7.read);
router.get('/profitController/delete',DemoController7.delete);
router.get('/profitController/update',DemoController7.update);

router.get('/projectController/create',DemoController8.create);
router.get('/projectController/read',DemoController8.read);
router.get('/projectController/delete',DemoController8.delete);
router.get('/projectController/update',DemoController8.update);

router.get('/serviceController/create',DemoController9.create);
router.get('/serviceController/read',DemoController9.read);
router.get('/serviceController/delete',DemoController9.delete);
router.get('/serviceController/update',DemoController9.update);

router.get('/titleController/create',DemoController10.create);
router.get('/titleController/read',DemoController10.read);
router.get('/titleController/delete',DemoController10.delete);
router.get('/titleController/update',DemoController10.update);

module.exports=router;