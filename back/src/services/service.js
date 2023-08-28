import { models } from "../db/model/model.js";

class service {
  static async createTodoService(content) {
    try {
      const result = await models.createTodoRepository(content);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async listTodosService() {
    try {
      const result = await models.listTodosRepository();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateTodoService(idx, content) {
    try {
      const result = await models.updateTodoRepository(idx, content);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTodoService(idx) {
    try {
      const result = await models.deleteTodoRepository(idx);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
export { service };
