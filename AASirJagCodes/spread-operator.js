const product = {
  name: 'iPhone 13 Pro',
  price: 64000,
};
const features1 = {
  network: '5G',
  faceId: true,
  chip: 'A15 Bionic Chip',
};
const features2 = {
  network: '10G'
}

// product.network = features.network;
// product.faceId = features.faceId;
// product.chip = features.chip;

// Object.assign(product, features);
//                            10G            5G
const item = { ...product, ...features2, ...features1, network: '25G' };
// What happen to the `product` variable
console.log(product);
console.log(features1);
console.log(features2);
console.log(item);
console.log(item.network);
