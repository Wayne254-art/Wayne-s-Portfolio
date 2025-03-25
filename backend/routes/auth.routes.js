
// routes/auth.routes.js
const express = require('express');
const { login } = require('../controllers/auth.controllers');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { responseReturn } = require('../utils/response');

const router = express.Router();

router.post('/user/login', login);

router.get("/user/check-auth", authMiddleware, (req, res) => {
    responseReturn(res, 200, ({ authenticated: true, user: req.user }))
  });

module.exports = router;