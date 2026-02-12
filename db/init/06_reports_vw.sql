-- ============================================
-- VIEW: vw_most_borrowed_books
-- ============================================
-- Qué devuelve:
-- ranking de libros más prestados
--
-- Grain:
-- 1 fila por libro
--
-- Métricas:
-- total_loans, rank

CREATE OR REPLACE VIEW vw_most_borrowed_books AS
SELECT
    b.id,
    b.title,
    b.author,
    COUNT(l.id) AS total_loans,
    RANK() OVER (ORDER BY COUNT(l.id) DESC) AS ranking
FROM books b
LEFT JOIN copies c ON b.id = c.book_id
LEFT JOIN loans l ON c.id = l.copy_id
GROUP BY b.id, b.title, b.author;

-- VERIFY
-- SELECT * FROM vw_most_borrowed_books;



-- ============================================
-- VIEW: vw_overdue_loans
-- ============================================
-- usa CTE + CASE

CREATE OR REPLACE VIEW vw_overdue_loans AS
WITH overdue AS (
    SELECT
        l.id,
        m.name,
        b.title,
        l.due_at,
        CURRENT_DATE - l.due_at AS days_overdue
    FROM loans l
    JOIN members m ON l.member_id = m.id
    JOIN copies c ON l.copy_id = c.id
    JOIN books b ON c.book_id = b.id
    WHERE l.returned_at IS NULL
)
SELECT
    *,
    CASE
        WHEN days_overdue > 30 THEN 'HIGH'
        WHEN days_overdue > 10 THEN 'MEDIUM'
        ELSE 'LOW'
    END AS severity
FROM overdue
WHERE days_overdue > 0;

-- VERIFY
-- SELECT * FROM vw_overdue_loans;



-- ============================================
-- VIEW: vw_fines_summary
-- ============================================

CREATE OR REPLACE VIEW vw_fines_summary AS
SELECT
    m.id,
    m.name,
    COUNT(f.id) AS total_fines,
    SUM(f.amount) AS total_amount,
    AVG(f.amount) AS avg_amount
FROM members m
JOIN loans l ON m.id = l.member_id
JOIN fines f ON l.id = f.loan_id
GROUP BY m.id, m.name
HAVING COUNT(f.id) > 0;

-- VERIFY
-- SELECT * FROM vw_fines_summary;



-- ============================================
-- VIEW: vw_member_activity
-- ============================================

CREATE OR REPLACE VIEW vw_member_activity AS
SELECT
    m.id,
    m.name,
    COUNT(l.id) AS total_loans,
    COALESCE(SUM(f.amount),0) AS total_fines,
    CASE
        WHEN COUNT(l.id) > 5 THEN 'ACTIVE'
        ELSE 'LOW_ACTIVITY'
    END AS activity_level
FROM members m
LEFT JOIN loans l ON m.id = l.member_id
LEFT JOIN fines f ON l.id = f.loan_id
GROUP BY m.id, m.name;

-- VERIFY
-- SELECT * FROM vw_member_activity;



-- ============================================
-- VIEW: vw_inventory_health
-- ============================================

CREATE OR REPLACE VIEW vw_inventory_health AS
SELECT
    b.category,
    COUNT(c.id) AS total_copies,
    SUM(
        CASE
            WHEN c.status='available' THEN 1
            ELSE 0
        END
    ) AS available,
    SUM(
        CASE
            WHEN c.status='loaned' THEN 1
            ELSE 0
        END
    ) AS loaned
FROM books b
JOIN copies c ON b.id=c.book_id
GROUP BY b.category;

-- VERIFY
-- SELECT * FROM vw_inventory_health;
