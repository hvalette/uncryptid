import Clue from '../components/Clue'
import { registerSW } from 'virtual:pwa-register'
import { getClues, getPlayers } from '../lib/data'

function App() {
    registerSW({ immediate: true })

    const clues = getClues()

    const players = getPlayers()

    return (
        <div className="flex flex-none snap-x snap-mandatory flex-row flex-nowrap overflow-auto">
            {players.map((player) => (
                <section
                    key={player.symbol}
                    className="w-full flex-none snap-center px-4"
                >
                    <div className="grid w-full place-items-center p-4">
                        <div
                            className={`grid h-12 w-12 place-items-center rounded-full border-2 border-white text-2xl text-white shadow ${player.classes}`}
                        >
                            {player.symbol}
                        </div>
                    </div>
                    <div className=" ">
                        {clues.map((clue) => (
                            <div key={clue.label}>
                                <div className="mb-2 border-y border-stone-300 bg-stone-100 py-2 text-center font-display text-3xl font-bold ">
                                    {clue.label}
                                </div>
                                {clue.values.map((value) => (
                                    <Clue key={value} value={value}></Clue>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    )
}

export default App
