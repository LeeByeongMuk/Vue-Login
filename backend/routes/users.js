const express = require('express');
const router = express.Router();
const models = require("../models");
const crypto = require('crypto');

router.post('/register', function (req, res) {
    const hash = crypto.createHmac('sha512', 'secret')
        .update(req.body.user.password)
        .digest('base64');

    models.users.create({
        login_id: req.body.user.id,
        name: req.body.user.name,
        password: hash
    }).then(result => {
        res.json({
            status: 200,
            message: '회원가입 되었습니다.'
        });
    }).catch(error => {
        res.json({
            status: 200,
            message: '중복된 아이디 입니다'
        })
    });
});

module.exports = router;
