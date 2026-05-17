import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

router.get("/", async (_, res) => {

  const todos = await Todo.find();

  res.json(todos);
});

router.post("/", async (req, res) => {

  const todo = await Todo.create({
    text: req.body.text
  });

  res.json(todo);
});

router.patch("/:id", async (req, res) => {

  const todo = await Todo.findById(
    req.params.id
  );

  todo.completed = !todo.completed;

  await todo.save();

  res.json(todo);
});

router.delete("/:id", async (req, res) => {

  await Todo.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Deleted"
  });
});

export default router;