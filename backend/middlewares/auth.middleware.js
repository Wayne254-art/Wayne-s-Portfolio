
const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async (req, res, next) => {
    try {
        const { accessToken } = req.cookies;
        if (!accessToken) {
            return res.status(401).json({ error: "Please login first" });
        }

        const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
        req.role = decodedToken.role;
        req.id = decodedToken.id;

        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token. Please login again." });
    }
};

