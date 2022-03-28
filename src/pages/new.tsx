import { Fragment, useState } from 'react'
import { getPlayers } from '../lib/data'
import { Listbox, Switch, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { createSearchParams, useNavigate } from 'react-router-dom'

const playersCountList = [
    { value: 2, label: '2 joueurs (Variant)' },
    { value: 3, label: '3 joueurs' },
    { value: 4, label: '4 joueurs' },
    { value: 5, label: '5 joueurs' },
]

export default function New() {
    const navigate = useNavigate()

    const [advanced, setAdvanced] = useState(false)
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

    const handleStartGame = () => {
        const gameOptions = {
            advanced,
            playerCount: playersCount.value,
            player: JSON.stringify(myPlayers),
            opponents: JSON.stringify(
                opponents.sort((a, b) => a.symbol.localeCompare(b.symbol))
            ),
        }
        return navigate({
            pathname: '/game',
            search: `?${createSearchParams(gameOptions as any)}`,
        })
    }

    return (
        <div className="flex h-full flex-col gap-8 p-8 md:px-16">
            <div className="text-xl font-bold">Configuration de la partie</div>
            <Switch.Group>
                <div className="flex w-full items-center justify-between">
                    <Switch.Label className="mr-4 font-semibold">
                        Avancé
                    </Switch.Label>
                    <Switch
                        checked={advanced}
                        onChange={setAdvanced}
                        className={`${
                            advanced ? 'bg-amber-400' : 'bg-stone-200'
                        }
                            relative inline-flex h-[34px] w-[74px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                        <span
                            className={`${
                                advanced ? 'translate-x-10' : 'translate-x-0'
                            } pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                    </Switch>
                </div>
            </Switch.Group>
            <div>
                <div className="font-semibold">Nombre de joueurs : </div>
                <div className="grid w-full place-items-center">
                    <Listbox value={playersCount} onChange={setPlayersCount}>
                        <div className="relative mt-1 w-full">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg border-2 border-stone-200 bg-white py-2 pl-3 pr-10 text-left focus:outline-none sm:text-sm">
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
                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md  bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                                                                ? 'font-semibold'
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
                <button
                    className="w-full rounded-full  bg-amber-500 p-4 font-bold uppercase text-white shadow active:bg-amber-600"
                    onClick={handleStartGame}
                >
                    Démarrer la partie
                </button>
            </div>
        </div>
    )
}
