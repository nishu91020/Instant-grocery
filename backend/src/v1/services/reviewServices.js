const Product = require('../Models/product');
const Review = require('../Models/review');

exports.addReview = async (productId, reviewDetails, customer) => {
    const product = await Product.findById(productId).exec();
    if (!product) {
        return new Error('invalid product');
    }
    const newReview = new Review({
        description: reviewDetails.description,
        customer: customer,
        rating: reviewDetails.rating
    });
    await newReview.save();
    product.reviews.push(newReview);
    await product.save();
    return product;
};

exports.deleteReview = async (reviewId, productId) => {
    const review = await Review.findByIdAndDelete(reviewId);
    reviewId = this.removeReviewFromProduct(reviewId, productId);
    return review;
};

exports.getAllReviews = async productId => {
    const reviews = await Product.findById(productId).populate('reviews');
    return reviews;
};
exports.getReview = async reviewId => {
    const review = await Review.findById(reviewId);
    return review;
};
exports.removeReviewFromProduct = async (reviewId, productId) => {
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('invalid product review!');
    }
    if (product.reviews.includes(reviewId)) {
        product.reviews = product.reviews.filter(rev => rev != reviewId);
        await product.save();
    }
    else {
        throw new Error('invalid review for product');
    }
    return reviewId;
};
