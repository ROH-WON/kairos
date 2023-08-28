import { pool } from "../schema/schema.js";

class models {
  static async createTodoRepository(content) {
    try {
      const conn = await pool.getConnection();

      const getMaxIdxSql = "SELECT MAX(idx) AS max_idx FROM todotable";
      const [maxIdxResult] = await pool.query(getMaxIdxSql);
      const nextIdx = (maxIdxResult[0].max_idx || 0) + 1;

      const insertSql = "INSERT INTO todotable (idx, content) VALUES (?, ?)";
      const insertData = [nextIdx, content];
      await pool.query(insertSql, insertData);
      // const sql = "insert into todotable (content) values(?)";
      // const data = [content];
      // const [rows] = await pool.query(sql, data);
      conn.release();
      return { idx: nextIdx, content };
      // return rows;
    } catch (error) {
      throw error;
    }
  }

  static async listTodosRepository() {
    try {
      const conn = await pool.getConnection();
      const sql = "select * from todotable";
      const [rows] = await pool.query(sql);
      conn.release();
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async updateTodoRepository(idx, content) {
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
  }

  static async deleteTodoRepository(idx) {
    try {
      const conn = await pool.getConnection();
      const deleteSql = "delete from todotable where idx=?";
      const deleteDate = [idx];
      // const sql = "delete from todotable where idx=?";
      // const data = [idx];
      await pool.query(deleteSql, deleteDate);

      const updateSql = "UPDATE todotable SET idx = idx - 1 WHERE idx > ?";
      const updateData = [idx];
      await pool.query(updateSql, updateData);

      // const [rows] = await pool.query(sql, data);
      conn.release();
      // return rows;
    } catch (error) {
      throw error;
    }
  }
}

export { models };
