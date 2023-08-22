// services/todoService.js

import {
  createTodoRepository,
  listTodosRepository,
  updateTodoRepository,
  deleteTodoRepository,
} from "../db/model.js";

export const createTodoService = async (content) => {
  try {
    const result = await createTodoRepository(content);
    return result;
  } catch (error) {
    throw error;
  }
};

export const listTodosService = async () => {
  try {
    const result = await listTodosRepository();
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateTodoService = async (idx, content) => {
  try {
    const result = await updateTodoRepository(idx, content);
    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteTodoService = async (idx) => {
  try {
    const result = await deleteTodoRepository(idx);
    return result;
  } catch (error) {
    throw error;
  }
};
