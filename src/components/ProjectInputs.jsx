import { forwardRef } from "react";

const inputTailwindClasses =
  "mb-6 px-2 py-1 bg-gray-300 rounded focus:outline-none font-inputFontFamily";

const ProjectInputs = forwardRef(function ProjectInputs(
  { label, inputType, ...props },
  ref
) {
  return (
    <p className="flex flex-col">
      <label className="uppercase mb-1 md:mb-3 text-xs md:text-base">
        {label}
      </label>
      {inputType === "textarea" ? (
        <textarea
          ref={ref}
          className={inputTailwindClasses}
          required
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className={inputTailwindClasses}
          type={inputType}
          required
          {...props}
        />
      )}
    </p>
  );
});

export default ProjectInputs;
