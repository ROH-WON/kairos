import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import todoRoutes from "./routers/router.js"; // 수정된 경로

const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.use("/todos", todoRoutes); // 수정된 경로

  return app;
};

export default createApp;
