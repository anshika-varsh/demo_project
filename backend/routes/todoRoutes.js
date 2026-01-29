import express from "express";
import Todo from "../models/todo.js";

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add todo
router.post("/", async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  const saved = await todo.save();
  res.json(saved);
});

// Delete todo
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

export default router;
