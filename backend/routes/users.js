const express = require('express');
const router = express.Router();
const models = require("../models");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

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

router.post('/login', function (req, res) {
    const privateKey = 'secret';
    const body = req.body;
    const hash = crypto.createHmac('sha512', 'secret')
        .update(body.user.password)
        .digest('base64');

    models.users.findOne({
        where: {
            login_id: body.user.id
        }
    }).then(result => {
        if (result.dataValues.password == hash) {
            let token = jwt.sign({
                login_id: result.login_id,
                name: result.name
            }, privateKey, {
                expiresIn: '1h'
            }, (err, token) => {
                res.json({
                    token: token,
                    status: 200,
                    message: '로그인 되었습니다.'
                });
            });
        } else {
            res.json({
                status: 200,
                message: '비밀번호가 틀렸습니다.'
            });
        }
    }).catch(error => {
        res.json({
            status: 200,
            message: '회원정보가 없습니다.'
        });
    });
})

module.exports = router;
