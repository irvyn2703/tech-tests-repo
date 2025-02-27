import InputCreateTask from "../../InputCreateTask/UI/InputCreateTask";
import Task from "../../Task/UI/Task";

export default function TaskContainer() {
  return (
    <>
      <InputCreateTask />
      <main>
        <Task />
        <Task />
        <Task />
      </main>
    </>
  );
}
