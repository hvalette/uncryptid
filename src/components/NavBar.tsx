import { EyeIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function NavBar() {
    return (
        <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-cyan-700 p-4 shadow-xl">
            <Link href="/new" passHref>
                <button className="rounded bg-amber-500 py-2 px-4 font-bold uppercase text-white shadow active:bg-amber-600">
                    New
                </button>
            </Link>
            <div className="text-bold font-display text-4xl tracking-widest text-white">
                Uncryptid
            </div>
            <button className="rounded-full p-2 active:bg-cyan-800">
                <EyeIcon className="h-8 w-8 text-white"></EyeIcon>
            </button>
        </header>
    )
}
