const express = require("express");
const router = express.Router();
const services = require("../services/render");


/**
 * @description Root Route
 * GET
 */
router.get('/', services.homeRoutes);


/**
 * @description add users
 * GET /add-user
 */
router.get('/add-user', services.add_user);


/**
 * @description Root Route
 * GET /update-user
 */
router.get('/update-user', services.update_user);

module.exports = router; 