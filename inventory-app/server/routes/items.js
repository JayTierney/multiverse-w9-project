const express = require("express");
const router = express.Router();
const { Item, seedItem } = require("../models/inventory")

//GET all items

router.get('/', async (req, res, next) => {
    try {
        const items = await Item.findAll();
        res.send(items);
    } catch (error) {
        next(error);
    }
});