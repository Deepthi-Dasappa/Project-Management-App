import Button from "./Button";

export default function NoProjectSelected({ onCreateNewProject }) {
  return (
    <div className="flex flex-col items-center mt-9 w-2/3 p-9">
      <img
        src="src/assets/app-logo.png"
        alt="Project without Task"
        className="w-24 h-24 object-contain"
      />
      <h2 className="m-6 font-noProjectFontFamily md:text-2xl text-neutral-900 font-semibold">
        No Project Selected
      </h2>
      <p className="font-noProjectFontFamily text-center text-neutral-500 md:text-lg -mt-3 mb-9">
        Select a project or get started with a new one
      </p>
      <p>
        <Button onClick={onCreateNewProject}>Create New Project</Button>
      </p>
    </div>
  );
}
