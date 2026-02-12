-- ============================================
-- CREAR USUARIO DE APLICACIÓN
-- ============================================

DO $$
BEGIN
   IF NOT EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE rolname = 'appuser'
   ) THEN
      CREATE ROLE appuser LOGIN PASSWORD 'apppass';
   END IF;
END
$$;


-- ============================================
-- REVOCAR PERMISOS PELIGROSOS
-- ============================================

REVOKE ALL ON SCHEMA public FROM appuser;
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM appuser;


-- ============================================
-- DAR PERMISOS SOLO A VIEWS
-- ============================================

GRANT USAGE ON SCHEMA public TO appuser;

GRANT SELECT ON vw_most_borrowed_books TO appuser;
GRANT SELECT ON vw_overdue_loans TO appuser;
GRANT SELECT ON vw_fines_summary TO appuser;
GRANT SELECT ON vw_member_activity TO appuser;
GRANT SELECT ON vw_inventory_health TO appuser;


-- ============================================
-- VERIFICACIÓN
-- ============================================

-- esto debe funcionar
-- SET ROLE appuser;
-- SELECT * FROM vw_most_borrowed_books;

-- esto debe FALLAR
-- SELECT * FROM books;
