import express from "express";
import pool from "./database.js";
import cors from "cors";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/create", async (req, res) => {
  try {
    let { content } = req.body;
    console.log(content);
    const conn = await pool.getConnection();
    let sql = "insert into todotable (content) values(?)";
    let data = [content];
    console.log(data);
    const [rows] = await pool.query(sql, data);
    res.status(200).json({ result: rows });
    conn.release();
  } catch (error) {
    console.log(error);
  }
});
app.listen(8080, () => {
  console.log("실행!");
});
