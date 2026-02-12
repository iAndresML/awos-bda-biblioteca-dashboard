CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  member_type TEXT NOT NULL,
  joined_at DATE NOT NULL
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  isbn TEXT UNIQUE NOT NULL
);

CREATE TABLE copies (
  id SERIAL PRIMARY KEY,
  book_id INT REFERENCES books(id),
  barcode TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL
);

CREATE TABLE loans (
  id SERIAL PRIMARY KEY,
  copy_id INT REFERENCES copies(id),
  member_id INT REFERENCES members(id),
  loaned_at DATE NOT NULL,
  due_at DATE NOT NULL,
  returned_at DATE
);

CREATE TABLE fines (
  id SERIAL PRIMARY KEY,
  loan_id INT REFERENCES loans(id),
  amount NUMERIC(10,2),
  paid_at DATE
);
