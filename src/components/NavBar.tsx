import { EyeIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-gradient-to-b from-cyan-700 to-cyan-600 p-4 shadow-xl">
            <Link to="/new">
                <button className="rounded-full bg-amber-500 py-2 px-4 font-bold uppercase text-white shadow active:bg-amber-600">
                    New
                </button>
            </Link>
            <Link to="/">
                <div className="font-display text-4xl tracking-widest text-white">
                    Uncryptid
                </div>
            </Link>
            <button className="rounded-full p-2 active:bg-cyan-800">
                <EyeIcon className="h-8 w-8 text-white"></EyeIcon>
            </button>
        </header>
    )
}
