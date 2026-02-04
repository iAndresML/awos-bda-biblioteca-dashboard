CREATE VIEW vw_most_borrowed_books AS
SELECT b.title,COUNT(l.id) total,RANK() OVER(ORDER BY COUNT(l.id) DESC) rank
FROM books b JOIN copies c ON c.book_id=b.id JOIN loans l ON l.copy_id=c.id
GROUP BY b.title;

CREATE VIEW vw_overdue_loans AS
WITH base AS(
SELECT l.id,m.name,b.title,l.due_at,l.returned_at
FROM loans l JOIN members m ON m.id=l.member_id
JOIN copies c ON c.id=l.copy_id JOIN books b ON b.id=c.book_id)
SELECT *,CASE WHEN returned_at IS NULL AND due_at<CURRENT_DATE THEN 'vencido' ELSE 'ok' END status FROM base;

CREATE VIEW vw_fines_summary AS
SELECT m.name,SUM(f.amount) total
FROM fines f JOIN loans l ON l.id=f.loan_id JOIN members m ON m.id=l.member_id
GROUP BY m.name HAVING SUM(f.amount)>0;

CREATE VIEW vw_member_activity AS
SELECT m.name,COUNT(l.id) total,CASE WHEN COUNT(l.id)>0 THEN 'activo' ELSE 'inactivo' END status
FROM members m LEFT JOIN loans l ON l.member_id=m.id GROUP BY m.name;

CREATE VIEW vw_inventory_health AS
SELECT b.title,COUNT(c.id) total,SUM(CASE WHEN c.status='available' THEN 1 ELSE 0 END) available
FROM books b JOIN copies c ON c.book_id=b.id GROUP BY b.title;
