var db = require("../models");
exports.getAddBook = (req, res) => {
    //here add route
    res.render('route', {
        pageTitle: 'Add Product',
        path: 'route path',
        editing: false
    });
};
exports.postAddBook = (req, res) => {
    const title = req.body.title;
    const imageUrl = req.body.image;
    const price = req.body.price;
    const description = req.body.description;
    const author = req.body.author;
    const book = {
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description,
        author: author
    };
    db.Book.create(book)
        .then(result => {
            console.log(result);
        }).catch(err => {
        console.log(err);
    })

};
exports.getEditBook = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        //will have to replce it with correct root
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    db.Book.findById(prodId, product => {
        if (!product) {
            return res.redirect('/');
//page reder setup
        }


        //here also set the path
        res.render('renderpath', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        })
    })
}
exports.postEditBook = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    const updatedProduct = new Book(
        prodId,
        updatedTitle,
        updatedImageUrl,
        updatedDesc,
        updatedPrice
    );
    updatedProduct.save();
    //setUpPath
    res.redirect('setuppath');
};

exports.getBook = (req, res, next) => {
    db.Book.fetchAll(products => {
        res.render('setupPath', {
            prods: products,
            pageTitle: 'Admin Products',
            path: 'setUpPath'
        });
    });
};

exports.postDeletebook = (req, res, next) => {
    const prodId = req.body.productId;
    db.Book.deleteById(prodId);
    res.redirect('setupPath');
};
  
