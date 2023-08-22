// routers/todoRouter.js

import express from "express";
import {
  createTodo,
  listTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/controller.js";

const todoRouter = express.Router();

todoRouter.post("/create", createTodo);
todoRouter.get("/list", listTodos);
todoRouter.put("/update", updateTodo);
todoRouter.delete("/delete", deleteTodo);

export default todoRouter;
