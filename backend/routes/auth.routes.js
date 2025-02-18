
// routes/auth.routes.js
const express = require('express');
const { login } = require('../controllers/auth.controllers');
const router = express.Router();
const authenticateUser = require('../middlewares/auth')

router.post('/user/login', login);

router.get('/check-auth', authenticateUser, (req, res) => {
    res.json({ isAuthenticated: true, user: req.user })
})

module.exports = router;