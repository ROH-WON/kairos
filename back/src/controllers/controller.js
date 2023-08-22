// controllers/todoController.js

import {
  createTodoService,
  listTodosService,
  updateTodoService,
  deleteTodoService,
} from "../services/service.js";

export const createTodo = async (req, res) => {
  try {
    const { content } = req.body;
    const result = await createTodoService(content);
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
};

export const listTodos = async (req, res) => {
  try {
    const result = await listTodosService();
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { idx, content } = req.body;
    const result = await updateTodoService(idx, content);
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { idx } = req.body;
    const result = await deleteTodoService(idx);
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
};
