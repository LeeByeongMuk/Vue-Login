const express = require('express');
const router = express.Router();
const model = require('../models/users.js');
const crypto = require('crypto');

router.post('/register', function (req, res) {
    const hash = crypto.createHash('sha512')
        .update(req.body.user.passowrd)
        .digest('base64');

    let result = model.create({
        login_id: req.body.user.id,
        password: hash,
        name: req.body.user.name
    });

    console.log(result);

    return res.json({
        'status': 200,
        'message': '회원가입 되었습니다.'
    });
});

module.exports = router;
