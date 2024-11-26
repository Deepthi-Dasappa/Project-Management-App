import { useState, useRef } from "react";

export default function Tasks() {
  const [tasksArray, setTasksArray] = useState([null]);
  const taskInput = useRef();

  function handleClick() {
    const taskTitle = taskInput.current.value;
    console.log(taskInput.current.value);
    if (taskInput.current.value.trim()) {
      setTasksArray((previousData) => {
        return [...previousData, taskTitle];
      });
    }

    taskInput.current.value = "";
  }

  console.log(tasksArray);

  return (
    <div>
      <h1 className="font-inputFontFamily text-xl font-bold mb-6 -mt-5 md:mt-0">
        Tasks
      </h1>
      <div className="flex gap-3 mr-4 -mt-5 md:mt-0">
        <input
          ref={taskInput}
          type="text"
          className="w-55 h-7 md:w-4/5 bg-slate-300 rounded outline-none md:p-2 font-sans"
        />
        <button onClick={handleClick} className="text-xs -mr-20 md:text-base">
          Add Task
        </button>
      </div>
      {tasksArray.length === 0 && (
        <p className="mt-4">There are no tasks for the project yet</p>
      )}
      <ul>
        {tasksArray.length > 0 &&
          tasksArray.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
      </ul>
    </div>
  );
}
