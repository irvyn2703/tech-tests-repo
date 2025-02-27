import { useRef } from "react";
import TasksRepository from "../../../repositories/TasksRepository";

export default function InputCreateTaskBusiness() {
  const newTask = useRef();

  const handleCreateTask = async () => {
    let task = newTask?.current?.value?.trim();

    if (task) {
      try {
        const response = await TasksRepository.createTask({ task });
        alert(response.mesaageSuceess());
      } catch (error) {
        console.error(error);
      }
    }
  };

  return {
    newTask,
    handleCreateTask,
  };
}
