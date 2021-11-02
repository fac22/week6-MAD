import db from './connection';

function getProducts() {
  const SELECT_PRODUCTS = /* sql */ `
  SELECT id, name, genre, category, publisher, price, stock, to_char(created_at, 'DD Mon YYYY') AS created_at FROM products
  `;
  return db.query(SELECT_PRODUCTS).then((result) => result.rows);
}

export { getProducts };
