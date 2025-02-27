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

export default { createTask, getTasks };
