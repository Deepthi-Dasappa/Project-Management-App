export default function Header() {
  return (
    <header className="flex justify-center py-3 tracking-wider  bg-gradient-to-r from-slate-600 to-slate-100">
      <img className="w-20 h-20 mr-7" src="app-logo.png" alt="App-Logo" />
      <h1 className="my-6 md:my-4 text-xl md:text-4xl font-extrabold">
        My Project Management App
      </h1>
    </header>
  );
}
