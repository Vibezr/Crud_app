const express = require("express");
const router = express.Router();
const services = require("../services/render");

router.get('/', services.homeRoutes);

router.get('/add-user', function(req, res){
    res.render("add_user")
});

router.get('/update-user', function(req, res){
    res.render("update_user")
});

module.exports = router; 