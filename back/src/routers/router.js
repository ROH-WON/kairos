import express from "express";
import { controller } from "../controllers/controller.js";

const todoRouter = express.Router();

todoRouter.post("/create", controller.createTodo);
todoRouter.get("/list", controller.listTodos);
todoRouter.put("/update", controller.updateTodo);
todoRouter.delete("/delete", controller.deleteTodo);

export default todoRouter;
