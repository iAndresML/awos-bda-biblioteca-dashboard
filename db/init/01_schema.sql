-- ============================================
-- TABLA: members
-- ============================================

CREATE TABLE IF NOT EXISTS members (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    member_type TEXT NOT NULL,
    joined_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- TABLA: books
-- ============================================

CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    category TEXT NOT NULL,
    isbn TEXT UNIQUE NOT NULL
);

-- ============================================
-- TABLA: copies
-- ============================================

CREATE TABLE IF NOT EXISTS copies (
    id SERIAL PRIMARY KEY,
    book_id INTEGER NOT NULL,
    barcode TEXT UNIQUE NOT NULL,
    status TEXT NOT NULL DEFAULT 'available',

    CONSTRAINT fk_copy_book
        FOREIGN KEY(book_id)
        REFERENCES books(id)
        ON DELETE CASCADE
);

-- ============================================
-- TABLA: loans
-- ============================================

CREATE TABLE IF NOT EXISTS loans (
    id SERIAL PRIMARY KEY,
    copy_id INTEGER NOT NULL,
    member_id INTEGER NOT NULL,
    loaned_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    due_at TIMESTAMP NOT NULL,
    returned_at TIMESTAMP,

    CONSTRAINT fk_loan_copy
        FOREIGN KEY(copy_id)
        REFERENCES copies(id),

    CONSTRAINT fk_loan_member
        FOREIGN KEY(member_id)
        REFERENCES members(id)
);

-- ============================================
-- TABLA: fines
-- ============================================

CREATE TABLE IF NOT EXISTS fines (
    id SERIAL PRIMARY KEY,
    loan_id INTEGER NOT NULL,
    amount NUMERIC(10,2) NOT NULL,
    paid_at TIMESTAMP,

    CONSTRAINT fk_fine_loan
        FOREIGN KEY(loan_id)
        REFERENCES loans(id)
);
