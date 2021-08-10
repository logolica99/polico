require('dotenv').config()

const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

const express = require('express');
const router = express.Router();



//importing models
const User = require('../models/user');


//handling requests

router.post('/registration', async (req, res) => {

    try {
        const user = new User(req.body);
        await user.save();
        user_data = { user_id: user.id }
        const accessToken = jwt.sign(user_data, process.env.ACCESS_TOKEN_SECRET);

        res.status(201).json({ accessToken: accessToken });
    } catch (error) {
        console.log(error)
        res.status(500).send("Failed");
    }
})

router.post('/login', async (req, res) => {
    User.findOne({ username: req.body.username })
        .then(async result => {

            if (result == null) {
                return res.status(400).send('Cannot Find User');
            }
            try {

                if (await bcrypt.compare(req.body.password, result.password)) {
                    const user = { user_id: result.id };
                    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);


                    return res.status(202).json({ accessToken: accessToken });
                } else {
                    return res.status(400).send('failed');
                }


            } catch (error) {
                res.status(500).send()
            }
        })
        .catch(error => {
            console.log(error)
        })


})



module.exports = router