const express = require('express');
const db = require('./data/db-config');

const server = express();
server.use(express.json());

server.get('/api/items', async (req, res) => {
    try {
        const items = await db('items');
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get items' });
    }
});

server.post('/api/items', async (req, res) => {
    try {
        const [id] = await db('items').insert(req.body);
        const newItem = await db('items').where({ id }).first();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create item' });
    }
});

server.delete('/api/items/:id', async (req, res) => {
    try {
        const count = await db('items').where({ id: req.params.id }).del();
        if (count) {
            res.status(200).json({ message: 'Item deleted'});
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete item' });
    }
});

module.exports = server;