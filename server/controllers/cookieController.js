const User = require ('../models/userModel'); //double check pathing
const cookieController = {};

cookiesController.setCookie = (req, res, next) => {
res.cookie()
};



cookiesController.setSSIDCookie = (req, res, next) => {
res.cookie('ssid', res.locals.user._id,{
    maxAge: 50000,
    httpOnly: true,
    secure: true
})
console.log(res.cookie);
next();
}

;

module.exports = cookieController;