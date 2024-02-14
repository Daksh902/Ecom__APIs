const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/create', productController.addProduct);
router.get('/', productController.listProducts);
router.delete('/:id', productController.deleteProduct);
router.post('/:id/update_quantity', productController.updateQuantity);

module.exports = router;
