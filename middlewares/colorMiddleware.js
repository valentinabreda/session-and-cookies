module.exports = function colorMiddleware (req, res, next){
    if(req.cookies.color){
        req.color = req.cookies.color
    }
    if(req.session.color){
        req.color = req.session.color;
    }
    next();
}