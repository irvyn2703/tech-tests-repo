import Task from "../domain/Task.js";
import TasksServices from "../services/TasksServices.js";

async function createTask({ task }) {
  const response = await TasksServices.createTask({ task });
  return Task.fromJSON(response.data);
}

async function getTasks() {
  const response = await TasksServices.getTasks();
  return Task.fromJSONArray(response.data);
}

async function updateTask({ id, data }) {
  const response = await TasksServices.updateTask({ id, data });
  return Task.fromJSON(response.data);
}

async function deleteTask({ id }) {
  const response = await TasksServices.deleteTask({ id });
  return Task.fromJSON(response.data);
}

export default { createTask, getTasks, updateTask, deleteTask };
