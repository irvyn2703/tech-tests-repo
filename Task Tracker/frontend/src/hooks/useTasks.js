import { useEffect, useState } from "react";
import TasksRepository from "../repositories/TasksRepository";

export default function useTasks({ newTask, handleToggleNewTask }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      if (newTask) {
        try {
          const response = await TasksRepository.getTasks();
          setTasks(response);
          handleToggleNewTask();
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchTasks();
  }, [newTask]);

  return { tasks };
}
