import Task from "../models/task.js";
import Response from "../domain/response.js";

export const getTasks = async (req, res) => {
  try {
    const task = await Task.find();
    return Response.success({ res, data: task });
  } catch (error) {
    return Response.error({ res, error });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = new Task({ title });
    await newTask.save();
    return Response.create({ res, data: newTask });
  } catch (error) {
    return Response.error({ res, error });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );
    return Response.success({ res, data: task });
  } catch (error) {
    return Response.error({ res, error });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    return Response.success({ res, data: task });
  } catch (error) {
    return Response.error({ res, error });
  }
};
