const Product = require('../Models/product');

exports.addProductToInventory = function (req, res, next) {
    const product = new Product({
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
        vendor: req.body.vendor,
        price: req.body.price,
        quantity: req.body.quantity,
        reviews: req.body.reviews,
        rating: req.body.rating,
        status: req.body.status
    });
    product.save(err => {
        if (err) {
            return next(err);
        }
        res.send('product saved');
    });
};
exports.deleteProductFromInventory = function (req, res, next) {
    Product.findById(req.params.id).deleteOne().then(() => {
        res.status(201).send(`product ${req.params.id} deleted`);
    });
};
exports.modifyProductInInventory = function (req, res, next) {
    const product = new Product({
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
        vendor: req.body.vendor,
        price: req.body.price,
        quantity: req.body.quantity,
        reviews: req.body.reviews,
        rating: req.body.rating,
        status: req.body.status,
        _id: req.params.id
    });
    Product.findByIdAndUpdate(req.params.id, product, {}, (err, modifiedProduct) => {
        if (err) next(err);
        res.send(modifiedProduct);
    });
};
