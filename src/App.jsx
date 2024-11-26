import ProjectSidebar from "./components/ProjectsSidebar.jsx";
import Header from "./components/Header.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState, useRef } from "react";
import Modal from "./components/Modal.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

export default function App() {
  const [addOrCreateNewProject, setAddOrCreateNewProject] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [projectSelected, setProjectSelected] = useState(null);
  const modal = useRef();

  function handleAddNewProject() {
    setAddOrCreateNewProject(true);
  }

  function handleSaveClick(data) {
    if (
      data.enteredProjectTitle.trim() === "" ||
      data.enteredProjectDescription.trim() === "" ||
      data.enteredProjectDueDate.trim() === ""
    ) {
      console.log("This  line of code got executed");
      modal.current.open();
      return;
    }
    // console.log("Data", data);
    else {
      setProjectData((previousData) => [
        ...previousData,
        {
          projectId: Math.random().toFixed(4),
          projectTitle: data.enteredProjectTitle,
          projectDescription: data.enteredProjectDescription,
          projectDueDate: data.enteredProjectDueDate,
        },
      ]);
    }
    setAddOrCreateNewProject(false);
  }

  function handleProjectClick(projectId) {
    console.log("project id :", projectId);
    setProjectSelected(projectId);
  }

  function handleProjectDeleteYesClick(deleteProjectId) {
    setProjectData(
      projectData.filter((data) => {
        return data.projectId != deleteProjectId;
      })
    );
    setProjectSelected(null);
  }

  function handleCancelClick() {
    setProjectSelected(null);
    setAddOrCreateNewProject(false);
  }

  // console.log(
  //   "Check",
  //   projectData.find((data) => {
  //     return data.projectId === projectSelected;
  //   })
  // );

  return (
    <>
      <Modal ref={modal} buttonContent="Okay">
        <h2 className="font-serif text-xl mb-5">Invalid Input</h2>
        <p className="font-serif text-base mb-2">
          Opps..... you entered a invalid input data
        </p>
        <p className="font-serif text-base">
          Please enter the valid input in order to save the project
        </p>
      </Modal>
      <Header />
      <main className="h-screen flex">
        <ProjectSidebar
          onCreateNewProject={handleAddNewProject}
          // projectData={projectData}
          projectData={projectData}
          // {projectData.filter(
          //   (data) => projectData.projectId !== deleteProjectId
          // )}
          projectClick={handleProjectClick}
        />

        {addOrCreateNewProject ? (
          <NewProject
            onSaveClick={handleSaveClick}
            onCancelClick={handleCancelClick}
          />
        ) : projectSelected ? (
          <SelectedProject
            projectData={projectData.find((data) => {
              return data.projectId === projectSelected;
            })}
            onProjectYesDeleteClick={handleProjectDeleteYesClick}
          />
        ) : (
          <NoProjectSelected onCreateNewProject={handleAddNewProject} />
        )}
        {/* <NewProject /> */}
        {/* <NoProjectSelected /> */}
        {/* {projectSelected && <SelectedProject />} */}
      </main>
    </>
  );
}
