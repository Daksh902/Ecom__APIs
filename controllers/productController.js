const Product = require('../models/productModel');

// Add a new product
exports.addProduct = async (req, res) => {
    try {
        const { name, quantity } = req.body;
        const product = new Product({ name, quantity });
        await product.save();
        res.json({ product });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// List all products
exports.listProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ products });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update quantity of a product by ID
exports.updateQuantity = async (req, res) => {
    try {
        const { number } = req.query;
        const product = await Product.findById(req.params.id);
        product.quantity += parseInt(number);
        await product.save();
        res.json({ product, message: 'Updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
