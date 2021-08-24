require('dotenv').config()

const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

const express = require('express');
const router = express.Router();

//importing middlewares
const authenticateToken = require('../middlewares/authenticateToken');

//importing models
const User = require('../models/user');


//handling requests

// user registration
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

//user login
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


// get user data
router.get('/:user_id', authenticateToken, async (req, res) => {
    User.find({ _id: req.params.user_id }).select("-password")
        .then(user_data => {

            res.status(200).json(user_data)

        })
        .catch(error => {
            console.log(error);
            res.status(500).send("failed");
        })
})


//update user data
router.post('/update', authenticateToken, async (req, res) => {
    try {
        await User.updateOne({ _id: req.user.user_id }, { $set: req.body });

        return res.status(201).send("user profile updated successfully");

    } catch (error) {
        console.log(error);
        res.status(500).send("Failed");
    }
})

//delete user data
router.delete("/delete", authenticateToken, async (req, res) => {
    try {
        await User.deleteOne({ _id: req.user.user_id });
        return res.status(201).send("user deleted successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Failed");
    }
})



module.exports = router

