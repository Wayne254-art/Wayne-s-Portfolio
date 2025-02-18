
const User = require('../models/user.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
        // Check if the user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }
  
        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
  
        // Create JWT token with user data
        const token = jwt.sign(
            { id: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email, role: user.role, phonenumber: user.phonenumber }, // Include user data in the token payload
            process.env.JWT_SECRET || 'wayne',
            { expiresIn: '1h' }
        );
  
        // Set cookie options
        const cookieOptions = {
            httpOnly: true,   // Ensures the cookie is sent only via HTTP(S), not accessible to JavaScript
            secure: true, // Only use HTTPS in production
            maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
            sameSite: 'Strict', // Helps mitigate CSRF attacks
        };
  
        // Send the token as a cookie
        res.cookie('token', token, cookieOptions);
  
        // Respond with success and minimal user data
        return res.status(200).json({ 
            message: 'Login successful', 
            user: { id: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email, role: user.role, phonenumber: user.phonenumber } 
        });
    } catch (error) {
        console.error('Login error:', error); // Log the error for debugging purposes
        return res.status(500).json({ message: 'Internal server error' });
    }
  };