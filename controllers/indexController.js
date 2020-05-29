const indexController = {
    index: (req, res) => {
        res.render('index', {color: req.color});
    },
    color: (req, res) => {
        req.session.color =req.body.color;
        if(req.body.recordar) {
            res.cookie('color', req.body.color, {maxAge: 120000});
        }
        res.redirect('/');
    }
};


module.exports = indexController;