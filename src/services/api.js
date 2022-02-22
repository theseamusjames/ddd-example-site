const baseUrl = "http://localhost:3000/"; 
const endpoints = {
    products: "products.json",
    reviews: "reviews.json",
}

const Api = {
    getProducts,
    getProduct,
    getReviewsForProductId,
};

export default Api;

async function getProducts() {
    const response = await fetch(`${baseUrl}${endpoints['products']}`);

    return JSON.parse(await response.text());
}

async function getProduct(id) {
    const products = await getProducts();
    return products.find((product) => product.id === id);
}

async function getReviewsForProductId(productId) {
    const response = await fetch(`${baseUrl}${endpoints['reviews']}`);
    const reviews = JSON.parse(await response.text());
    return reviews.filter((review) => review.productId === productId);
}