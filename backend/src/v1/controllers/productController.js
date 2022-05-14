const Product = require('../Models/product');

exports.addProductToInventory = async (req, res, next) => {
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
    try {
        const new_product = product.save();
        res.send(new_product);
    } catch (err) {
        res.send('error occured');
    }
};
exports.deleteProductFromInventory = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        product.deleteOne().then(() => {
            res.status(201).send(`product ${req.params.id} deleted`);
        });
    } catch (err) {
        res.send('error occured!');
    }
};
exports.modifyProductInInventory = async (req, res, next) => {
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
    try {
        Product.findByIdAndUpdate(req.params.id, product, {}, (err, modifiedProduct) => {
            if (err) next(err);
            res.send(modifiedProduct);
        });
    } catch (err) {
        res.send('error occured !!');
    }
};
