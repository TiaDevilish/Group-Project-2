var db = require("../models");

exports.createBook = (req, res, next) => {

    db.Book.create({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description,
        jpegImg: req.body.jpegImg,
        UserId: req.user.id
    }).then(function () {
        res.redirect('/api/book/search');
    })
};

exports.searchBook = (req, res, next) => {
    db.Book.findAll()
        .then(function (books) {
            db.User.findByPk(req.user.id)
                .then(user =>
                    user.getCart()
                        .then(cart => cart.getBooks())
                        .then(cartBooks => cartBooks.map(b => b.id))
                        .then(booksIdInCart => books.filter(book => !booksIdInCart.includes(book.id)))
                ).then(filterBook => {
                const booksData = filterBook.map(book => book.dataValues)
                    .map(booksData => {
                        booksData.isNotOwn = !(booksData.UserId === req.user.id);
                        return booksData;
                    });
                res.render("search-book", {books: booksData});
            });

        });
};

exports.getBookById = (req, res, next) => {
    db.Book.findOne({
        where: {
            id: req.params.bookId,
        }
    }).then(function (book) {
        if (book) {
            res.render("edit-book", {book: book.dataValues});
        } else {
            res.render("browse-book");
        }

    });
};

exports.editBook = (req, res, next) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        description: req.body.description,
        jpegImg: req.body.jpegImg
    };
    const selector = {
        where: {id: req.params.bookId}
    };

    db.Book.update(book, selector)
        .then(function (rowsUpdated) {
            res.redirect(`/api/book/search`);
        }).catch(next);
};

exports.deleteBook = (req, res, next) => {
    const selector = {
        where: {id: req.params.bookId}
    };

    db.Book.destroy(selector)
        .then(function (rowsUpdated) {
            res.json(rowsUpdated);
        }).catch(next);
};

