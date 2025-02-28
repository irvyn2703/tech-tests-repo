import { useState } from "react";

export default function TaskContainerBusiness() {
  const [newTask, setNewTask] = useState(true);

  const handleToggleNewTask = () => {
    console.log("handleToggleNewTask");
    setNewTask(!newTask);
  };

  return { newTask, handleToggleNewTask };
}
