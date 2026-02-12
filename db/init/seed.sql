INSERT INTO members (name,email,member_type,joined_at) VALUES
('Juan Perez','juan@mail.com','student','2024-01-01'),
('Maria Lopez','maria@mail.com','teacher','2023-06-01'),
('Carlos Ruiz','carlos@mail.com','student','2024-02-01');

INSERT INTO books (title,author,category,isbn) VALUES
('Clean Code','Robert Martin','Programming','111'),
('1984','George Orwell','Novel','222'),
('The Hobbit','Tolkien','Fantasy','333');

INSERT INTO copies (book_id,barcode,status) VALUES
(1,'BC1','available'),
(1,'BC2','loaned'),
(2,'BC3','loaned'),
(3,'BC4','available');

INSERT INTO loans (copy_id,member_id,loaned_at,due_at,returned_at) VALUES
(2,1,'2025-01-01','2025-01-10',NULL),
(3,2,'2025-01-05','2025-01-12','2025-01-15');

INSERT INTO fines (loan_id,amount,paid_at) VALUES
(2,50,NULL);
