CREATE USER appuser WITH PASSWORD 'apppass';

GRANT CONNECT ON DATABASE postgres TO appuser;

GRANT USAGE ON SCHEMA public TO appuser;

GRANT SELECT ON ALL TABLES IN SCHEMA public TO appuser;

GRANT SELECT ON vw_most_borrowed_books TO appuser;
GRANT SELECT ON vw_overdue_loans TO appuser;
GRANT SELECT ON vw_fines_summary TO appuser;
GRANT SELECT ON vw_member_activity TO appuser;
GRANT SELECT ON vw_inventory_health TO appuser;
