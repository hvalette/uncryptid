import { EyeIcon } from '@heroicons/react/solid';

export default function NavBar() {
  return (
    <header className="z-50 h-16 w-full fixed top-0 left-0 bg-cyan-700 shadow-xl flex justify-between items-center p-4">
      <button className="bg-amber-500 py-2 px-4 uppercase text-white rounded shadow font-bold active:bg-amber-600">
        New
      </button>
      <div className="text-white font-display text-4xl text-bold tracking-widest">
        Uncryptid
      </div>
      <button className="p-2 active:bg-cyan-800 rounded-full">
        <EyeIcon className="w-8 h-8 text-white"></EyeIcon>
      </button>
    </header>
  );
}
