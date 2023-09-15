import request from "supertest";
import express from "express";
import todoRouter from "../src/routers/router.js";
import { models } from "../src/db/model/model.js";

jest.mock("../src/db/model/model.js", () => ({
  models: {
    createTodoRepository: jest.fn(),
    listTodosRepository: jest.fn(),
    updateTodoRepository: jest.fn(),
    deleteTodoRepository: jest.fn(),
  },
}));

describe("Todo API Endpoints", () => {
  const app = express();
  app.use(express.json());
  app.use("/todos", todoRouter);

  beforeEach(() => {
    models.createTodoRepository.mockClear();
    models.listTodosRepository.mockClear();
    models.updateTodoRepository.mockClear();
    models.deleteTodoRepository.mockClear();
  });

  it("should create a new todo", async () => {
    models.createTodoRepository.mockResolvedValue({
      idx: 1,
      content: "New Todo",
    });

    const response = await request(app)
      .post("/todos/create")
      .send({ content: "New Todo" });

    expect(models.createTodoRepository).toHaveBeenCalledWith("New Todo");
    expect(response.status).toBe(200);
    expect(response.body.result).toEqual({ idx: 1, content: "New Todo" });
  });

  it("should list all todos", async () => {
    models.listTodosRepository.mockResolvedValue([
      { idx: 1, content: "Todo 1" },
    ]);

    const response = await request(app).get("/todos/list");

    expect(models.listTodosRepository).toHaveBeenCalled();
    expect(response.status).toBe(200);
    expect(response.body.result).toEqual([{ idx: 1, content: "Todo 1" }]);
  });

  it("should update a todo", async () => {
    models.updateTodoRepository.mockResolvedValue([
      {
        /* updated data */
      },
    ]);

    const response = await request(app)
      .put("/todos/update")
      .send({ idx: 1, content: "Updated Todo" });

    expect(models.updateTodoRepository).toHaveBeenCalledWith(1, "Updated Todo");
    expect(response.status).toBe(200);
    // Add more assertions as needed
  });

  it("should delete a todo", async () => {
    models.deleteTodoRepository.mockResolvedValue([
      {
        /* delete result */
      },
    ]);

    const response = await request(app)
      .delete("/todos/delete")
      .send({ idx: 1 });

    expect(models.deleteTodoRepository).toHaveBeenCalledWith(1);
    expect(response.status).toBe(200);
    // Add more assertions as needed
  });
});
