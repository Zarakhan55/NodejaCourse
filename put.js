// PUT updates data, DELETE removes data from server.

import express from 'express';

const app = express();
app.use(express.json());

let items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
    { id: 3, name: 'Item Three' }
];

// Update item
app.put('/items/:id', (req, res) => {
    // Gets the id from URL
    const id = parseInt(req.params.id);
    const updatedItem = req.body;

    let item = items.find(i => i.id === id);
    if (item) {
        item.name = updatedItem.name || item.name;
        res.json({
            message: 'Item updated successfully',
            item
        });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Delete item
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(i => i.id === id);
    if (index !== -1) {
        const deletedItem = items.splice(index, 1);
        res.json({

            message: 'Item deleted successfully',
            deletedItem
        });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
