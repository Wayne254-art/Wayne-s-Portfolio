
const User = require('../models/user.model')
const bcrypt = require('bcryptjs');
const { responseReturn } = require('../utils/response');
const { createToken } = require('../utils/createToken');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                const token = await createToken({
                    id: user.userId,
                    role: user.role,
                });

                res.cookie("accessToken", token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "Strict",
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });

                return responseReturn(res, 200, { token, user, message: "Login successful" });
            }
        }

        responseReturn(res, 404, { error: "Invalid Credentials" });
    } catch (error) {
        responseReturn(res, 500, { error: error.message });
    }
};