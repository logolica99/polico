const bcrypt = require('bcryptjs');

const express = require('express');
const router = express.Router();

//importing models
const User = require('../models/user');


router.post('/registration', async (req, res) => {

    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send("Success");
    } catch (error) {
        console.log(error)
        res.status(500).send("Failed");
    }
})

router.post('/login', async (req, res) => {
    User.findOne({ username: req.body.username })
        .then(async result => {
          
            if(result==null){
                return res.status(400).send('Cannot Find User');
            }
            try{
             
                if(await bcrypt.compare(req.body.password,result.password)){
                    return res.status(202).send("success");
                }else{
                    return res.status(400).send('failed');
                }
               

            }catch(error){
                res.status(500).send()
            }
        })
        .catch(error => {
            console.log(error)
        })


})


module.exports = router