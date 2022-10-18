var Userdb = require("../model/model");
// const express = require("express");
// const router = express.Router();

// create and save new user
exports.create = function(req, res){
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"})
        return;
    }

    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //save user in databas
    user
        .save(user)
        .then(data, function(){
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message ||"Some error occured while creating a create-user operation"
            })
        })
};



// retrieve and return all users/single user
exports.find = function(req, res){

};

// Update a new identified user by user ID
exports.update = function(req, res){

};


// delete user with specified user id in the request
exports.delete = function(req, res){

};