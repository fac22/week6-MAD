import db from './connection';

function getProducts() {
  const SELECT_PRODUCTS = /* sql */ `
  SELECT id, name, description, genre, category, publisher, price, stock, to_char(created_at, 'DD Mon YYYY') AS created_at FROM products
  `;
  return db.query(SELECT_PRODUCTS).then((result) => result.rows);
}

function getProduct(name) {
  const SELECT_PRODUCT = /* sql */ `
  SELECT id, name, description, genre, category, publisher, price, stock, to_char(created_at, 'DD Mon YYYY') AS created_at FROM products WHERE name=$1
  `;
  return db.query(SELECT_PRODUCT, [name]).then((result) => result.rows[0]);
}

export { getProducts, getProduct };
