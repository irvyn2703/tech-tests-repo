import InputCreateTask from "../../InputCreateTask/UI/InputCreateTask";
import Task from "../../Task/UI/Task";

export default function TaskContainer() {
  return (
    <div className="w-11/12 m-auto mt-10">
      <InputCreateTask />
      <main>
        <Task />
        <Task />
        <Task />
      </main>
    </div>
  );
}
