const express = require("express");
const routerItem = express.Router();

//different model routers
router.use('/items', require('./items'));
router.use('/users', require('./users'))

module.exports = routerItem;