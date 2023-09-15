import { service } from "../services/service.js";

class controller {
  static async createTodo(req, res) {
    try {
      const { content } = req.body;
      const result = await service.createTodoService(content);
      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
    }
  }

  static async listTodos(req, res) {
    try {
      const result = await service.listTodosService();
      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateTodo(req, res) {
    try {
      const { idx, content } = req.body;
      const result = await service.updateTodoService(idx, content);
      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteTodo(req, res) {
    try {
      const { idx } = req.body;
      const result = await service.deleteTodoService(idx);
      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
    }
  }
}

export { controller };
