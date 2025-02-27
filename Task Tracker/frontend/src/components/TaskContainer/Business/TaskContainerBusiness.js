import { useState } from "react";

export default function TaskContainerBusiness() {
  const [newTask, setNewTask] = useState(true);

  const handleToggleNewTask = () => {
    setNewTask(!newTask);
  };

  return { newTask, handleToggleNewTask };
}
