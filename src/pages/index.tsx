import { Link } from 'react-router-dom'

function App() {
    return (
        <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-4  px-4 pt-4">
                <figure className="aspect-square w-full  p-12">
                    <img
                        src="favicon.svg"
                        alt="Uncryptid logo"
                        className="rounded-full shadow"
                    />
                </figure>
                <Link to="/new">
                    <button className="w-full rounded-full bg-amber-500 py-2 px-4 font-bold uppercase text-white shadow active:bg-amber-600">
                        Nouvelle partie
                    </button>
                </Link>
                <a
                    href="https://github.com/hvalette/uncryptid"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <button className="w-full rounded-full bg-black py-2 px-4 font-bold uppercase text-white shadow active:bg-amber-600">
                        Le projet
                    </button>
                </a>
            </div>
            <footer className="flex justify-center text-xs md:text-sm">
                <span>
                    Le jeu Cryptide et les images sont la propriété d{`'`}
                    <a
                        href="https://ospreypublishing.com/store/osprey-games"
                        className="text-blue-400"
                    >
                        Osprey games
                    </a>
                </span>
            </footer>
        </div>
    )
}

export default App
