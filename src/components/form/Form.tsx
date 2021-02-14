import { useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
  name: string;
  done: boolean;
}

const Form = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (ev: FormElement) => {
    ev.preventDefault();
    addTask(newTask);
    setNewTask("");
    console.log("enviando", tasks);
  };

  // recibes tareas que son string
  const addTask = (name: string) => {
    // añades las tareas y añades una nueva
    const newTasks: ITask[] = [...tasks, { name: name, done: false }];
    setTasks(newTasks);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">
        <input
          type="text"
          id="text"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
      </label>
      <button className="btn btn-outline-success">Save</button>
    </form>
  );
};

export default Form;
