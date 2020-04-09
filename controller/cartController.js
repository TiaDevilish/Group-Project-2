var db = require("../models");

exports.getCart = (req, res, next) => {
    db.User.findByPk(req.user.id)
        .then(user => user.getCart())
        .then(cart => cart.getBooks())
        .then(books => {
            const booksData = books.map(book => book.dataValues)
            res.render("cart", {books: booksData})
        });
};

exports.addToCart = (req, res, next) => {
    const selector = {where: {id: req.params.bookId}};
    db.Book.findOne(selector)
        .then(book => {
            return db.User.findByPk(req.user.id)
                .then(user => user.getCart())
                .then(cart => cart.addBook(book))
        }).then(result => res.json(result))

};

exports.delete = (req, res, next) => {
    const selector = {where: {id: req.params.bookId}};
    db.User.findByPk(req.user.id)
        .then(user => user.getCart())
        .then(cart => cart.getBooks(selector))
        .then(books => {
            const  book = books[0];
           return  book.CartItem.destroy();
        })
        .then(result => res.json(result));
};

