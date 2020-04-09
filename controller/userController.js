var db = require("../models");

exports.createUser = (req, res, next) => {
    db.User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password
    }).then(function () {
        res.redirect("/");
    }).catch(function (err) {
        res.status(401).json(err);
    });
};


exports.getAllUsers = (req, res, next) => {
    db.User.findAll()
        .then(function (users) {
            const userData = users.map(user => user.dataValues);
            res.render("user", {user: userData});
        });
};

exports.getUserById = (req, res, next) => {
    db.User.findOne({
        where: {
            id: req.params.userId,
        }
    }).then(function (user) {
        if (user) {
            res.render("edit-user", {user: user.dataValues});
        } else {
            res.redirect("/");
        }

    });
};
exports.editUser = (req, res, next) => {
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,

    };
    const selector = {
        where: {id: req.params.userId}
    };

    db.User.update(user, selector)
        .then(function (rowsUpdated) {
            res.redirect('/api/user/search');
        }).catch(next);
};

exports.deleteUser = (req, res, next) => {
    const selector = {
        where: {id: req.params.userId}
    };
    db.User.destroy(selector).then(function (rowsUpdated) {
        res.json(rowsUpdated);
    }).catch(next);


}
