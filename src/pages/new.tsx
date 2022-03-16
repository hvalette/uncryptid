import { Fragment, useState } from 'react'
import { getClues, getPlayers } from '../lib/data'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const playersCountList = [
    { value: 2, label: '2 joueurs' },
    { value: 3, label: '3 joueurs' },
    { value: 4, label: '4 joueurs' },
    { value: 5, label: '5 joueurs' },
]

function App() {
    const [difficulty, setDifficulty] = useState('normal')
    const [playersCount, setPlayersCount] = useState(playersCountList[1])
    const players = getPlayers()

    const [myPlayers, setMyPlayers] = useState([players[0]])
    const [opponents, setOpponents] = useState(
        players
            .filter(
                (player) =>
                    !myPlayers.map((mp) => mp.symbol).includes(player.symbol)
            )
            .slice(0, playersCount.value - 1)
    )

    const handleSelectMyPlayer = (player: any) => {
        if (playersCount.value === 2) {
            return
        }
        setMyPlayers([player])
        const index = opponents.findIndex((op) => op.symbol === player.symbol)
        if (index >= 0) {
            opponents.splice(index, 1)
            setOpponents([...opponents])
        }
    }

    const handleSelectOpponent = (player: any) => {
        if (playersCount.value === 2) {
            return
        }
        if (myPlayers.find((op) => op.symbol === player.symbol)) {
            return
        }
        const index = opponents.findIndex((op) => op.symbol === player.symbol)
        if (index >= 0) {
            opponents.splice(index, 1)
            setOpponents([...opponents])
            return
        }
        if (opponents.length >= playersCount.value - 1) {
            return
        }
        setOpponents([...opponents, player])
    }

    return (
        <div className="flex h-full flex-col gap-8 p-8 md:px-16">
            <div className="flex gap-4 ">
                <button
                    className={`relative basis-full rounded bg-stone-200 px-4 py-2 font-semibold uppercase shadow transition-all after:absolute after:-bottom-2 after:h-1 after:rounded after:bg-cyan-700 after:transition-all ${
                        difficulty === 'normal'
                            ? 'after:left-0 after:w-full'
                            : 'after:left-1/2 after:w-0'
                    }`}
                    onClick={() => setDifficulty('normal')}
                >
                    Normal
                </button>
                <button
                    className={`relative basis-full rounded bg-stone-900 px-4 py-2 font-semibold uppercase text-white shadow transition-all after:absolute after:-bottom-2 after:h-1 after:rounded after:bg-cyan-700 after:transition-all ${
                        difficulty === 'advanced'
                            ? 'after:left-0 after:w-full'
                            : 'after:left-1/2 after:w-0'
                    }`}
                    onClick={() => setDifficulty('advanced')}
                >
                    Avancé
                </button>
            </div>
            <div>
                <div className="font-semibold">Nombre de joueurs : </div>
                <div className="grid w-full place-items-center">
                    <Listbox value={playersCount} onChange={setPlayersCount}>
                        <div className="relative mt-1 w-1/2">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">
                                    {playersCount.label}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <SelectorIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {playersCountList.map((pc, index) => (
                                        <Listbox.Option
                                            key={index}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active
                                                        ? 'bg-amber-100 text-amber-900'
                                                        : 'text-gray-900'
                                                }`
                                            }
                                            value={pc}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${
                                                            selected
                                                                ? 'font-medium'
                                                                : 'font-normal'
                                                        }`}
                                                    >
                                                        {pc.label}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>
            </div>
            <div>
                <div className="font-semibold">Qui es-tu ? </div>
                <div className="flex w-full justify-evenly gap-4">
                    {players.map((player) => (
                        <button
                            key={player.symbol}
                            className={`grid h-10 w-10 place-items-center rounded-full border-2 border-white text-white shadow transition-all ${
                                player.classes
                            } ${
                                myPlayers
                                    .map((mp) => mp.symbol)
                                    .includes(player.symbol)
                                    ? 'opacity-1'
                                    : 'opacity-25'
                            }`}
                            onClick={() => handleSelectMyPlayer(player)}
                        >
                            {player.symbol}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <div className="font-semibold">
                    Qui sont les adversaires ?{' '}
                    <span
                        className={`font-light transition-all ${
                            opponents.length !== playersCount.value - 1 &&
                            'text-red-400'
                        }`}
                    >
                        {opponents.length} / {playersCount.value - 1}
                    </span>{' '}
                </div>
                <div className="flex w-full justify-evenly gap-4">
                    {players.map((player) => (
                        <button
                            key={player.symbol}
                            className={`grid h-10 w-10 place-items-center rounded-full border-2 border-white text-white shadow transition-all ${
                                player.classes
                            } ${
                                opponents
                                    .map((op) => op.symbol)
                                    .includes(player.symbol)
                                    ? 'opacity-1'
                                    : 'opacity-25'
                            }`}
                            onClick={() => handleSelectOpponent(player)}
                        >
                            {player.symbol}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-auto">
                <Link to="/">
                    <button className="w-full rounded-md bg-amber-500 p-4 font-bold uppercase text-white active:bg-amber-600">
                        Démarrer la partie
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default App
