const express = require("express");
const router = express.Router();
const Users = require('../models/usersModel');
const bcrypt = require("bcryptjs");
//add middleware later


router.post('/register', async (req, res, next) => {
    try {
        const { name, password } = req.body;
        const user = await Users.findBy({ name }).first();

        if (user) {
            return res.status(409).json({ message: "Username is already taken" })
        };

        if (!password) {
            return res.status(400).json({ message: "Please provide a password" })
        };

        const newUser = await Users.createUser(req.body);
        res.status(201).json(newUser);

    } catch(err){
        next(err)
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const { name, password } = req.body;
        const isPasswordValid = await bcrypt.compare(password, req.dbUser.password);

        if(!isPasswordValid){
            return res.status(401).json({ message: "Invalid password" })
        };

        req.session.user = req.dbUser
        res.json({message: `Welcome ${name}!`})

    } catch(err) {
        next(err)
    }
});

router.get("/logout", (req, res, next) => {
    try {
        req.session.destroy((err) => {
            if(err){
                next(err)
            } else {
                res.json({message: "Successfully logged out"})
            }
        })
    } catch(err) {
        next(err)
    }
})

module.exports = router