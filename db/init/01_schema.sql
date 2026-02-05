CREATE TABLE members(
 id SERIAL PRIMARY KEY,
 name TEXT,
 email TEXT,
 member_type TEXT,
 joined_at DATE
);

CREATE TABLE books(
 id SERIAL PRIMARY KEY,
 title TEXT,
 author TEXT,
 category TEXT,
 isbn TEXT
);

CREATE TABLE copies(
 id SERIAL PRIMARY KEY,
 book_id INT REFERENCES books(id),
 barcode TEXT,
 status TEXT
);

CREATE TABLE loans(
 id SERIAL PRIMARY KEY,
 copy_id INT REFERENCES copies(id),
 member_id INT REFERENCES members(id),
 loaned_at DATE,
 due_at DATE,
 returned_at DATE
);

CREATE TABLE fines(
 id SERIAL PRIMARY KEY,
 loan_id INT REFERENCES loans(id),
 amount NUMERIC,
 paid_at DATE
);
