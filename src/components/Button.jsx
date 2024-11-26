export default function AddNewProjectButton({ children, ...props }) {
  return (
    <button
      className="bg-gray-600 rounded-sm md:rounded-md text-xs md:text-lg px-1 py-1 md:px-2 md:py-1 font-sans text-gray-300 hover:bg-slate-800"
      {...props}
    >
      {children}
    </button>
  );
}
