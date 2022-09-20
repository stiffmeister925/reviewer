// title, price, discountPercentage, rating, stock
const products = [
  {
    title: 'iPhone 9',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
  },
  {
    title: 'iPhone X',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
  },
  {
    title: 'Samsung Universe 9',
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
  },
  {
    title: 'OPPOF19',
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
  },
  {
    title: 'Huawei P30',
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
  },
  {
    title: 'MacBook Pro',
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
  },
  {
    title: 'Samsung Galaxy Book',
    price: 1499,
    discountPercentage: 4.15,
    rating: 4.25,
    stock: 50,
  },
  {
    title: 'Microsoft Surface Laptop 4',
    price: 1499,
    discountPercentage: 10.23,
    rating: 4.43,
    stock: 68,
  },
  {
    title: 'Infinix INBOOK',
    price: 1099,
    discountPercentage: 11.83,
    rating: 4.54,
    stock: 96,
  },
  {
    title: 'HP Pavilion 15-DK1056WM',
    price: 1099,
    discountPercentage: 6.18,
    rating: 4.43,
    stock: 89,
  },
  {
    title: 'perfume Oil',
    price: 13,
    discountPercentage: 8.4,
    rating: 4.26,
    stock: 65,
  },
  {
    title: 'Brown Perfume',
    price: 40,
    discountPercentage: 15.66,
    rating: 4,
    stock: 52,
  },
  {
    title: 'Fog Scent Xpressio Perfume',
    price: 13,
    discountPercentage: 8.14,
    rating: 4.59,
    stock: 61,
  },
  {
    title: 'Non-Alcoholic Concentrated Perfume Oil',
    price: 120,
    discountPercentage: 15.6,
    rating: 4.21,
    stock: 114,
  },
  {
    title: 'Eau De Perfume Spray',
    price: 30,
    discountPercentage: 10.99,
    rating: 4.7,
    stock: 105,
  },
  {
    title: 'Hyaluronic Acid Serum',
    price: 19,
    discountPercentage: 13.31,
    rating: 4.83,
    stock: 110,
  },
  {
    title: 'Tree Oil 30ml',
    price: 12,
    discountPercentage: 4.09,
    rating: 4.52,
    stock: 78,
  },
  {
    title: 'Oil Free Moisturizer 100ml',
    price: 40,
    discountPercentage: 13.1,
    rating: 4.56,
    stock: 88,
  },
  {
    title: 'Skin Beauty Serum.',
    price: 46,
    discountPercentage: 10.68,
    rating: 4.42,
    stock: 54,
  },
  {
    title: 'Freckle Treatment Cream- 15gm',
    price: 70,
    discountPercentage: 16.99,
    rating: 4.06,
    stock: 140,
  },
  {
    title: '- Daal Masoor 500 grams',
    price: 20,
    discountPercentage: 4.81,
    rating: 4.44,
    stock: 133,
  },
];

// title, price, discountPercentage, rating, stock
// Feature: all high rating more than or equals to 4 (0...5)
function callbackFn(element) {
  return element.rating >= 4;
}

const highestRating = products.filter(callbackFn);
const highRatingProduct = products.filter((element) => element.rating >= 4.5);
console.log(highestRating)

console.log(highRatingProduct)





