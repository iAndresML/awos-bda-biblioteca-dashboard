INSERT INTO members(name,email,member_type,joined_at) VALUES
('Ana','ana@mail.com','normal','2024-01-10'),
('Carlos','carlos@mail.com','premium','2024-02-05');

INSERT INTO books(title,author,category,isbn) VALUES
('Clean Code','Robert Martin','programacion','111'),
('1984','George Orwell','novela','222');

INSERT INTO copies(book_id,barcode,status) VALUES
(1,'BC1','available'),
(1,'BC2','loaned'),
(2,'BC3','loaned');

INSERT INTO loans(copy_id,member_id,loaned_at,due_at,returned_at) VALUES
(2,1,'2026-01-01','2026-01-10',NULL),
(3,2,'2026-01-05','2026-01-12','2026-01-15');

INSERT INTO fines(loan_id,amount,paid_at) VALUES
(2,50,NULL);
