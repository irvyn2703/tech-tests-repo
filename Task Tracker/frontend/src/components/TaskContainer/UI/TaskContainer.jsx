import useTasks from "../../../hooks/useTasks";
import InputCreateTask from "../../InputCreateTask/UI/InputCreateTask";
import Task from "../../Task/UI/Task";
import TaskContainerBusiness from "../Business/TaskContainerBusiness";

export default function TaskContainer() {
  const { handleToggleNewTask, newTask } = TaskContainerBusiness();
  const { tasks } = useTasks({ newTask, handleToggleNewTask });

  return (
    <div className="grid w-11/12 m-auto mt-10 gap-8">
      <InputCreateTask />
      <main>
        {tasks?.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
          />
        ))}
      </main>
    </div>
  );
}
