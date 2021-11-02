BEGIN;

DROP TABLE IF EXISTS users, sessions, products, orders CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sessions (
   sid TEXT PRIMARY KEY,
   data JSON NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    genre TEXT NOT NULL,
    category TEXT NOT NULL,
    publisher TEXT NULL DEFAULT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    products JSON NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    dipatched_at TIMESTAMP NULL DEFAULT NULL, 
    delivered_at TIMESTAMP NULL DEFAULT NULL
);

INSERT INTO users (email, password, name, address) VALUES
(
  'test@gmail.com',
  '$2a$10$vwhmLeePYHh6ayoIt42wKuelQ/JaQClYWYsFjr0V25qLLBowiZ.x.',
  'Test Testington',
  '1 Test House, Test Lane, Testford, T12 3ST'
), (
  'eviltest@gmail.com',
  '$2a$10$vwhmLeePYHh6ayoIt42wKuelQ/JaQClYWYsFjr0V25qLLBowiZ.x.',
  'Evil Testington',
  '1 Evil House, Evil Lane, Evilford, E34 V1L'
);

INSERT INTO products (name, genre, category, publisher, price, stock) VALUES
  ('GoGoGoblin', 'Arcade', 'Game', 'CADWORKS', 70.00, 97),
  ('StopStopStoplin', 'Arcade', 'Game', 'EVILWORKS', 50.00, 1), 
  ('GoGoGoblin II', 'RPG', 'Game', 'CADWORKS', 70.00, 99), 
  ('GoGoGoblin: Strategy Guide', 'Book', 'Merch', NULL, 200.00, 11);

INSERT INTO orders (user_id, products) VALUES
  (1, '{"1":2,"4":1}'),
  (2, '{"2":1}'),
  (2, '{"1":1}'),
  (1, '{"3":1}');

COMMIT;