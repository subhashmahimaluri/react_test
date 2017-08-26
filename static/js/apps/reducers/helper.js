import productsList from '../../../../data/mock.json';

export default function addToCart(id) {
  let item = productsList.catalog.find((item) => item.id === id);
  return item;
}
