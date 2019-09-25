const express = require('express');
const router = express.Router();


router.post("/api/login_check", function(req, res, next){
   
    res.send(`Number : {req.session.num}`);
});

router.post("/api/get_admin_msg", function(req, res, next){
    res.send("admins's message");
})

module.exports = router;




/*
router.post("/login_check", async function(req, res, next){
    const db = require('../model');
    var a = 1;

    a = await db.get_fun();

    res.send(a)
});
*/