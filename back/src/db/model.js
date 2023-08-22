// db/repository.js
import { pool } from "./schema.js";

export const createTodoRepository = async (content) => {
  try {
    const conn = await pool.getConnection();
    const sql = "insert into todotable (content) values(?)";
    const data = [content];
    const [rows] = await pool.query(sql, data);
    conn.release();
    return rows;
  } catch (error) {
    throw error;
  }
};

export const listTodosRepository = async () => {
  try {
    const conn = await pool.getConnection();
    const sql = "select * from todotable";
    const [rows] = await pool.query(sql);
    conn.release();
    return rows;
  } catch (error) {
    throw error;
  }
};

export const updateTodoRepository = async (idx, content) => {
  try {
    const conn = await pool.getConnection();
    const sql = "update todotable set content=? where idx=?";
    const data = [content, idx];
    const [rows] = await pool.query(sql, data);
    conn.release();
    return rows;
  } catch (error) {
    throw error;
  }
};

export const deleteTodoRepository = async (idx) => {
  try {
    const conn = await pool.getConnection();
    const sql = "delete from todotable where idx=?";
    const data = [idx];
    const [rows] = await pool.query(sql, data);
    conn.release();
    return rows;
  } catch (error) {
    throw error;
  }
};
