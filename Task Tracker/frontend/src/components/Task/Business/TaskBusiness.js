import { useState } from "react";
import TasksRepository from "../../../repositories/TasksRepository";

export default function TasksBusiness({ id, completed }) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [loading, setLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleCompleted = async () => {
    try {
      setLoading(true);
      const response = await TasksRepository.updateTask({
        id,
        data: { completed: !isCompleted },
      });
      setIsCompleted(response.completed);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await TasksRepository.deleteTask({ id });
      setIsDeleted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { isCompleted, handleCompleted, isDeleted, handleDelete, loading };
}
