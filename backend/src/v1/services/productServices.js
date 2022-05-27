const Product = require('../Models/product');
const Vendor = require('../Models/vendor');

exports.addProduct = async (product, vendorId) => {
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) {
        throw new Error('vendor not found!');
    }
    const new_product = await product.save();
    vendor.products.push(new_product);
    vendor.save();
    return new_product;
};
exports.deleteProduct = async (productId, vendor) => {
    if (!vendor.products.includes(productId)) {
        throw new Error('you are authenticated to delete this prpduct');
    }
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
        throw new Error('product not found');
    }
    // products not getting removed from vendor collection
    vendor.products = vendor.products.filter(prod => prod !== productId);
    vendor.save();
    return product;
};
exports.updateProduct = async (productId, new_product, vendor) => {
    if (!vendor.products.includes(productId)) {
        throw new Error('you are not authenticated to update this product');
    }
    const product = Product.findById(productId);
    if (!product) {
        throw new Error('product not found');
    }
    Product.findByIdAndUpdate(productId, new_product, {}, (err, modifiedProduct) => {
        if (err) next(err);
        return modifiedProduct;
    });
};
