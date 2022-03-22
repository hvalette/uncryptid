import { Link } from 'react-router-dom'

function App() {
    return (
        <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-4  px-4 pt-4">
                <Link to="/new">
                    <button className="w-full rounded bg-amber-500 py-2 px-4 font-bold uppercase text-white shadow active:bg-amber-600">
                        Nouvelle partie
                    </button>
                </Link>
                <a href="https://github.com/hvalette/uncryptid">
                    <button className="w-full rounded bg-black py-2 px-4 font-bold uppercase text-white shadow active:bg-amber-600">
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
