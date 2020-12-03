const express = require('express');
const { route } = require('../app');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(storeController.getStores)); // wrap in catchErrors if async
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);

router.post(
  '/add',
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.createStore),
);
router.post(
  '/add/:id',
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.updateStore),
);

router.get('/stores/:id/edit', catchErrors(storeController.editStore));

module.exports = router;
