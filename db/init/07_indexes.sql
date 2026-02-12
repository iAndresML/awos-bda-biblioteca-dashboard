-- ============================================
-- INDEX 1: Búsqueda por título de libro
-- Mejora búsquedas por title y author
-- ============================================

CREATE INDEX IF NOT EXISTS idx_books_title
ON books(title);

CREATE INDEX IF NOT EXISTS idx_books_author
ON books(author);


-- VERIFY:
-- EXPLAIN ANALYZE
-- SELECT * FROM books WHERE title ILIKE '%Harry%';



-- ============================================
-- INDEX 2: JOIN crítico en loans
-- Mejora reportes y joins frecuentes
-- ============================================

CREATE INDEX IF NOT EXISTS idx_loans_member_id
ON loans(member_id);

CREATE INDEX IF NOT EXISTS idx_loans_copy_id
ON loans(copy_id);


-- VERIFY:
-- EXPLAIN ANALYZE
-- SELECT * FROM loans WHERE member_id = 1;



-- ============================================
-- INDEX 3: filtro por fechas (reportes y multas)
-- ============================================

CREATE INDEX IF NOT EXISTS idx_loans_due_at
ON loans(due_at);

CREATE INDEX IF NOT EXISTS idx_loans_loaned_at
ON loans(loaned_at);


-- VERIFY:
-- EXPLAIN ANALYZE
-- SELECT * FROM loans
-- WHERE due_at < CURRENT_DATE;



-- ============================================
-- INDEX 4: JOIN en copies
-- ============================================

CREATE INDEX IF NOT EXISTS idx_copies_book_id
ON copies(book_id);


-- VERIFY:
-- EXPLAIN ANALYZE
-- SELECT * FROM copies WHERE book_id = 1;



-- ============================================
-- INDEX 5: JOIN en fines
-- ============================================

CREATE INDEX IF NOT EXISTS idx_fines_loan_id
ON fines(loan_id);

CREATE INDEX IF NOT EXISTS idx_fines_paid_at
ON fines(paid_at);


-- VERIFY:
-- EXPLAIN ANALYZE
-- SELECT * FROM fines WHERE paid_at IS NULL;
