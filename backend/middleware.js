const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: "No token provided"
        });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, "trello_password")
    const userId = decoded.userId;

    if(userId){
        req.userId = userId;
        next();
    }
    else{
        return res.status(403).json({
            message: "Token was malformed"
        })
    }
}

module.exports = {
    authMiddleware: authMiddleware
}