import Modal from "./Modal.jsx";
import { useRef } from "react";
import Button from "./Button.jsx";
import Tasks from "./Tasks.jsx";

export default function SelectedProject({
  projectData,
  onProjectYesDeleteClick,
}) {
  //   console.log("Project Data:", projectData);

  const modal = useRef();

  const projectDate = new Date(projectData.projectDueDate);
  const formattedDueDate = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(projectDate);

  function handleDeleteClick() {
    modal.current.open();
  }

  function handleNoButtonClick() {
    modal.current.close();
  }

  return (
    <>
      <Modal ref={modal}>
        <p className="font-serif">
          Are you sure you want to delete the project?
        </p>
        <div className="flex justify-center gap-7 mt-4  ">
          <Button onClick={handleNoButtonClick}>No</Button>
          <Button
            onClick={() => onProjectYesDeleteClick(projectData.projectId)}
          >
            Yes
          </Button>
        </div>
      </Modal>
      <div className="w-56 md:w-5/6 mt-10 md:mt-20 mr-10 pl-10 md:pl-20">
        <div className="flex justify-between">
          <h1 className="font-serif text-2xl md:text-3xl font-semibold tracking-wide mb-1 ">
            {projectData.projectTitle}
          </h1>
          <button className="font-sans text-sm" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
        <p className="text-slate-500">{formattedDueDate}</p>
        <p className="mt-4 md:mt-7 border-b-2 font-sans pb-3 text-lg md:text-xl mb-8">
          {projectData.projectDescription}
        </p>
        <Tasks />
      </div>
    </>
  );
}
