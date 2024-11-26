import ProjectInputs from "./ProjectInputs";
import { useRef } from "react";

export default function NewProject({ onSaveClick, onCancelClick }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  let data = {
    enteredProjectTitle: "",
    enteredProjectDescription: "",
    enteredProjectDueDate: "",
  };

  function handleChange() {
    data = {
      enteredProjectTitle: title.current.value,
      enteredProjectDescription: description.current.value,
      enteredProjectDueDate: dueDate.current.value,
    };
    console.log("data new project : ", data);
  }

  return (
    <div className="mt-9 w-2/3 h-screen mx-12">
      <menu className="flex justify-end gap-5 my-5 md:my-8">
        <li>
          <button onClick={onCancelClick}>Cancel</button>
        </li>
        <li>
          <button
            onClick={() => onSaveClick(data)}
            className="bg-slate-400 rounded-sm px-2 py-auto"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <ProjectInputs
          ref={title}
          inputType="text"
          label="Project Title"
          onChange={handleChange}
        />
        <ProjectInputs
          ref={description}
          inputType="textarea"
          label="Project Description"
          onChange={handleChange}
        />
        <ProjectInputs
          ref={dueDate}
          inputType="date"
          label="Project Due Date"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
