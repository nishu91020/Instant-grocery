
const Product = require('../Models/product');
const Vendor=require('../Models/vendor');


exports.addProduct=(product,vendorId)=>{
    const vendor=await Vendor.findById(vendorId);
    if(!vendor){
        throw new Error('vendor not found!');
    }
    const new_product = await product.save();
    vendor.products.push(new_product);
    return new_product;
     
}
exports.deleteProduct=async(productId)=>{
    const vendor=req.client;
    if(!vendor.products.includes(productId)){
        throw new Error('you are authenticated to delete this prpduct')
    }
    const product=await Product.findByIdAndDelete(productId);
    if(!product)
    {
        throw new Error('product not found')
    }
    vendor.products=vendor.products.filter(prod=>prod !== productId);
    await vendor.save();
    return product;

}
exports.updateProduct=async(productId,new_product)=>{
        const vendor=req.client;
        if(!vendor.products.includes(productId)){
            throw new Error('you are not authenticated to update this product')
        }
        const product=Product.findById(productId);
        if(!product){
            throw new Error('product not found');
        }
        Product.findByIdAndUpdate(productId, new_product, {}, (err, modifiedProduct) => {
            if (err) next(err);
            return modifiedProduct;
        });
}