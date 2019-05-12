const jwt = require('jsonwebtoken');
require('../config/config');

// authentication for further protections
exports.checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[0];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Error autenticacion token'
        });
    }
};


// =====================
// Verifica SellerRole
// =====================
exports.checkAdmin = (req, res, next) => {
    console.log('hey role', req.userData)
    let user = req.userData;
    console.log(user)
    if (req.userData.userRole === 'admin') {
        next();
    } else {

        return res.status(403).json({
            ok: false,
            err: {
                message: 'El rol de usuario no es válido'
            }
        });
    }
};