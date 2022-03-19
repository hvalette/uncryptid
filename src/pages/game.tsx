import { useRouter } from 'next/router'
import Clue from '../components/Clue'
import { getClues, getPlayers } from '../lib/data'

export default function Game() {
    const router = useRouter()

    console.log(router.query)
    const { difficulty, playerCount, player, opponents } = router.query

    const clues = getClues()
    if (!opponents) {
        return <div></div>
    }
    const players = JSON.parse((opponents ?? {}) as string)

    return (
        <div className="flex flex-none snap-x snap-mandatory flex-row flex-nowrap overflow-auto">
            {players &&
                players.map((player: any) => (
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
