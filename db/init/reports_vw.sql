-- VIEW 1 ranking libros
CREATE VIEW vw_most_borrowed_books AS
SELECT
 b.title,
 b.author,
 COUNT(l.id) total_loans,
 RANK() OVER(ORDER BY COUNT(l.id) DESC) ranking
FROM books b
LEFT JOIN copies c ON b.id=c.book_id
LEFT JOIN loans l ON c.id=l.copy_id
GROUP BY b.title,b.author;

-- VIEW 2 overdue
CREATE VIEW vw_overdue_loans AS
WITH data AS (
 SELECT
  m.name,
  b.title,
  l.due_at,
  CURRENT_DATE - l.due_at dias_atraso
 FROM loans l
 JOIN members m ON m.id=l.member_id
 JOIN copies c ON c.id=l.copy_id
 JOIN books b ON b.id=c.book_id
 WHERE returned_at IS NULL
)
SELECT *,
CASE WHEN dias_atraso>0 THEN 'overdue' ELSE 'ok' END status
FROM data;

-- VIEW fines summary
CREATE VIEW vw_fines_summary AS
SELECT
 m.name,
 SUM(f.amount) total_amount,
 COUNT(f.id) total_fines
FROM fines f
JOIN loans l ON l.id=f.loan_id
JOIN members m ON m.id=l.member_id
GROUP BY m.name
HAVING SUM(f.amount)>0;

-- VIEW member activity
CREATE VIEW vw_member_activity AS
SELECT
 m.name,
 COUNT(l.id) total_loans,
 CASE
  WHEN COUNT(l.id)>2 THEN 'active'
  ELSE 'inactive'
 END status
FROM members m
LEFT JOIN loans l ON l.member_id=m.id
GROUP BY m.name;

-- VIEW inventory
CREATE VIEW vw_inventory_health AS
SELECT
 b.title,
 COUNT(c.id) total,
 SUM(CASE WHEN c.status='available' THEN 1 ELSE 0 END) available
FROM books b
LEFT JOIN copies c ON c.book_id=b.id
GROUP BY b.title;
