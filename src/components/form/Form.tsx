import { Fragment, useState } from "react";

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
  const addTask = (name: string): void => {
    // añades las tareas y añades una nueva
    const newTasks: ITask[] = [...tasks, { name: name, done: false }];
    setTasks(newTasks);
  };

  // btn toggle task
  const handleToggleDoneTask = (index: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const removeTask = (index: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <Fragment>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          id="text"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          autoFocus
        />
        <button className="btn btn-outline-success">Save</button>
      </form>
      {tasks.map((task: ITask, index: number) => {
        return (
          <div key={index}>
            <h6 style={{ textDecoration: task.done ? "line-through" : " " }}>
              {task.name + " " + task.done}
            </h6>
            <small>
              {task.done}
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => handleToggleDoneTask(index)}
              >
                {" "}
                {task.done ? "✔︎" : "𐄂"}{" "}
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeTask(index)}
              >
                🗑
              </button>
            </small>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Form;
