const product = {
  name: 'iPhone 13 Pro',
  price: 64000,
  network: '5G',
  faceId: true,
  chip: 'A15 Bionic Chip',
};

const { price, ...rest } = product;

console.log(price);
console.log(rest);


