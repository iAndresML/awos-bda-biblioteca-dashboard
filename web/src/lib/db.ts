import { Pool } from "pg";

/*
Uso Pool porque es la forma más simple de conectarse a PostgreSQL.
No uso nada avanzado para mantenerlo entendible.
Las credenciales vienen de variables de entorno, no hardcodeadas.
*/

export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
});
