-- ============================================
-- SEED: MEMBERS
-- ============================================

INSERT INTO members (name, email, member_type, joined_at) VALUES
('Carlos López','carlos@email.com','student','2023-01-10'),
('Ana Torres','ana@email.com','student','2023-02-15'),
('Luis Martínez','luis@email.com','teacher','2022-09-01'),
('María Gómez','maria@email.com','student','2023-03-20'),
('Pedro Sánchez','pedro@email.com','external','2023-04-12'),
('Laura Ramírez','laura@email.com','teacher','2022-11-05'),
('Jorge Díaz','jorge@email.com','student','2023-06-18'),
('Sofía Herrera','sofia@email.com','external','2023-07-22'),
('Miguel Castro','miguel@email.com','student','2023-08-30'),
('Elena Ruiz','elena@email.com','teacher','2022-12-10');

-- ============================================
-- SEED: BOOKS
-- ============================================

INSERT INTO books (title, author, category, isbn) VALUES
('Clean Code','Robert Martin','Programming','ISBN001'),
('The Pragmatic Programmer','Andrew Hunt','Programming','ISBN002'),
('Design Patterns','Erich Gamma','Programming','ISBN003'),
('Database System Concepts','Silberschatz','Database','ISBN004'),
('Introduction to Algorithms','Cormen','Algorithms','ISBN005'),
('Artificial Intelligence','Russell','AI','ISBN006'),
('Operating Systems','Tanenbaum','Systems','ISBN007'),
('Computer Networks','Tanenbaum','Networks','ISBN008'),
('Refactoring','Martin Fowler','Programming','ISBN009'),
('Code Complete','Steve McConnell','Programming','ISBN010');

-- ============================================
-- SEED: COPIES
-- ============================================

INSERT INTO copies (book_id, barcode, status) VALUES
(1,'BC001','available'),
(1,'BC002','loaned'),
(2,'BC003','available'),
(2,'BC004','available'),
(3,'BC005','loaned'),
(3,'BC006','available'),
(4,'BC007','available'),
(5,'BC008','loaned'),
(6,'BC009','available'),
(7,'BC010','available'),
(8,'BC011','available'),
(9,'BC012','loaned'),
(10,'BC013','available');

-- ============================================
-- SEED: LOANS
-- ============================================

INSERT INTO loans (copy_id, member_id, loaned_at, due_at, returned_at) VALUES
(2,1,'2024-01-01','2024-01-10',NULL),
(5,2,'2024-01-05','2024-01-15','2024-01-14'),
(8,3,'2024-01-10','2024-01-20',NULL),
(12,4,'2024-01-15','2024-01-25',NULL),
(3,5,'2024-01-20','2024-01-30','2024-01-28'),
(4,6,'2024-01-22','2024-02-01',NULL),
(6,7,'2024-01-25','2024-02-05',NULL),
(7,8,'2024-01-27','2024-02-07',NULL),
(9,9,'2024-01-28','2024-02-10',NULL),
(10,10,'2024-01-29','2024-02-11',NULL);

-- ============================================
-- SEED: FINES
-- ============================================

INSERT INTO fines (loan_id, amount, paid_at) VALUES
(1,50,NULL),
(3,25,NULL),
(4,10,'2024-02-01'),
(6,40,NULL),
(7,15,'2024-02-10');
