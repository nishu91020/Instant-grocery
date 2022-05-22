const Product = require('../Models/product');

exports.addReview = async (productId,reviewDetails) => {
        const product=await Product.findById(productId).exec();
        if(!product)
        {
            return new Error('invalid product');
        }
        
        const review = await reviewDetails.save();
        product.reviews.push(review);
        return review;
    
};

exports.deleteReview = async (reviewId,productId,Review) => {
        reviewId= this.removeReviewFromProduct(reviewId, productId);
        await Review.findByIdAndDelete(reviewId).exec();
        
    
};

exports.getAllReviews = async (productId) => {
        const reviews = await Product.findById(productId).populate('reviews');
        return reviews; 
};
exports.getReview = async(reviewId,Review) => {
    const review=await Review.findById(reviewId);
    return review;  
};
exports.removeReviewFromProduct = (reviewId,productId) => {
    const product=await Product.findById(productId);
    if(!product){
        throw new Error('invalid product review!');
    }
    if(product.reviews.includes(reviewId)){
        product.reviews=product.reviews.filter(rev=>rev != reviewId);
    }
    else
    {
        throw new Error('invalid review for product');
    }
    return reviewId;
};
