import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const db = await open({
  filename: path.join(__dirname, "../database/stocks.db"),
  driver: sqlite3.Database
});

await db.exec(`
  CREATE TABLE IF NOT EXISTS companies (
    company_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    symbol TEXT UNIQUE,
    sector TEXT,
    industry TEXT
  );

  CREATE TABLE IF NOT EXISTS financials (
    financial_id INTEGER PRIMARY KEY AUTOINCREMENT,
    symbol TEXT,
    pe_ratio REAL,
    eps REAL,
    roe REAL,
    debt_equity REAL,
    FOREIGN KEY(symbol) REFERENCES companies(symbol)
  );

  CREATE TABLE IF NOT EXISTS stocks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    symbol TEXT UNIQUE,
    price REAL,
    market_cap TEXT,
    FOREIGN KEY(symbol) REFERENCES companies(symbol)
  );

  CREATE TABLE IF NOT EXISTS ai_insights (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    symbol TEXT,
    recommendation TEXT,
    confidence REAL,
    FOREIGN KEY(symbol) REFERENCES companies(symbol)
  );
`);

const count = await db.get("SELECT COUNT(*) AS n FROM companies");
if (count.n === 0) {
  await db.exec(`
    INSERT INTO companies (name, symbol, sector, industry) VALUES
      ('Infosys', 'INFY', 'IT', 'Software Services'),
      ('TCS', 'TCS', 'IT', 'IT Consulting'),
      ('HDFC Bank', 'HDFCBANK', 'Banking', 'Private Bank'),
      ('Reliance Industries', 'RELIANCE', 'Energy', 'Conglomerate');

    INSERT INTO financials (symbol, pe_ratio, eps, roe, debt_equity) VALUES
      ('INFY', 9.2, 52.3, 27.1, 0.1),
      ('TCS', 8.7, 61.4, 31.2, 0.0),
      ('HDFCBANK', 18.6, 75.2, 16.5, 1.2),
      ('RELIANCE', 22.1, 45.7, 9.4, 0.8);

    INSERT INTO stocks (symbol, price, market_cap) VALUES
      ('INFY', 1520, 'Large Cap'),
      ('TCS', 3450, 'Large Cap'),
      ('HDFCBANK', 1680, 'Large Cap'),
      ('RELIANCE', 2750, 'Large Cap');

    INSERT INTO ai_insights (symbol, recommendation, confidence) VALUES
      ('INFY', 'Buy', 0.82),
      ('TCS', 'Hold', 0.71),
      ('HDFCBANK', 'Buy', 0.88),
      ('RELIANCE', 'Hold', 0.65);
  `);
}

export default db;
