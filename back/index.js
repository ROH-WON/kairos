import createApp from "./src/app.js"; // 수정된 경로

const app = createApp();
const port = 8080;

app.listen(port, () => {
  console.log("Listening...");
});

// import express from "express";
// import bodyParser from "body-parser";
// import { pool } from "./src/db/schema.js";
// import cors from "cors";

// const app = express();
// const port = 8080;

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.post("/create", async (req, res) => {
//   try {
//     let { content } = req.body;
//     console.log(content);
//     const conn = await pool.getConnection();
//     let sql = "insert into todotable (content) values(?)";
//     let data = [content];
//     console.log(data);
//     const [rows] = await pool.query(sql, data);
//     res.status(200).json({ result: rows });
//     conn.release();
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get("/list", async (req, res) => {
//   try {
//     const conn = await pool.getConnection();
//     const sql = "select * from todotable";
//     const [rows] = await pool.query(sql);
//     res.status(200).json({ result: rows });
//     conn.release();
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.post("/update", async (req, res) => {
//   try {
//     const { idx, content } = req.body;
//     console.log(idx, content);
//     const conn = await pool.getConnection();
//     const sql = "update todotable set content=? where idx=?";
//     const data = [content, idx];
//     const [rows] = await pool.query(sql, data);
//     res.status(200).json({ result: rows });
//     conn.release();
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.post("/delete", async (req, res) => {
//   try {
//     const { idx } = req.body;
//     console.log(idx);
//     const conn = await pool.getConnection();
//     const sql = "delete from todotable where idx=?";
//     const data = [idx];
//     const [rows] = await pool.query(sql, data);
//     res.status(200).send(rows);
//     conn.release();
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.listen(port, () => {
//   console.log("Listening...");
// });
