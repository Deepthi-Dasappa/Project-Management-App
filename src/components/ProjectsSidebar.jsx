import Button from "./Button.jsx";

export default function ProjectSidebar({
  onCreateNewProject,
  projectData,
  projectClick,
}) {
  console.log("Project data i sidebar component:", projectData);
  return (
    <aside className="flex flex-col w-1/4 h-full mt-9 bg-slate-500 rounded-tr-3xl">
      <h2 className="text-black font-serif font-extrabold text-xs md:text-2xl uppercase mt-8 ml-3">
        Your Projects
      </h2>
      <div className="mt-6 ml-3">
        <Button onClick={onCreateNewProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8 ml-5">
        {projectData.map((data) => {
          return (
            <li
              key={data.projectId}
              onClick={() => projectClick(data.projectId)}
              className="basis-full font-serif tracking-wide text-xl text-slate-950 hover:text-slate-400  rounded"
            >
              <button>{data.projectTitle}</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
