const Item = require('../models/Item');

exports.createItem = async (req, res) => {
    const { itemId, name, description, img_name, stock, price, shop_name } = req.body;
    try {
        const item = await Item.create({ itemId, name, description, img_name, stock, price, shop_name });
        res.status(201).json({ message: 'Item created successfully', item });
    } catch (error) {
        res.status(500).json({ message: 'Error creating item', error });
    }
};

// Get all items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
};

// Update an item by itemId
exports.updateItem = async (req, res) => {
    const { itemId } = req.params;
    const { name, description, img_name, stock, price, shop_name } = req.body;
    try {
        const item = await Item.findOne({ where: { itemId } });
        if (item) {
            item.name = name;
            item.description = description;
            item.stock = stock;
            item.price = price;
            item.shop_name = shop_name;
            item.img_name = img_name;
            await item.save();
            res.json({ message: 'Item updated successfully', item });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating item', error });
    }
};

// Delete an item by itemId
exports.deleteItem = async (req, res) => {
    const { itemId } = req.params;
    try {
        const item = await Item.findOne({ where: { itemId } });
        if (item) {
            await item.destroy();
            res.json({ message: 'Item deleted successfully' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
};