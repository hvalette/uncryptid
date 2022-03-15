import { useState } from 'react';
import { ThumbUpIcon, ThumbDownIcon } from '@heroicons/react/solid';
import Clue from './components/Clue';

function App() {
  const [count, setCount] = useState(0);

  const clues = [
    {
      label: 'Est dans un type de terrain',
      values: [
        'Forêt ou Désert',
        'Forêt ou Lac',
        'Forêt ou Marécage',
        'Forêt ou Montagne',
        'Désert ou Lac',
        'Désert ou Marécage',
        'Désert ou Montagne',
        'Lac ou Marécage',
        'Lac ou Montagne',
        'Marécage ou Montagne',
      ],
    },
    {
      label: 'Est dans, ou à 1 case',
      values: [
        'Forêt',
        'Désert',
        'Marécage',
        'Montagne',
        'Lac',
        "Territoire d'un Animal",
      ],
    },
    {
      label: 'Est dans, ou à 2 cases',
      values: [
        'Pierre dressée',
        'Cabane abandonnée',
        "Territoire d'un Ours",
        "Territoire d'un Puma",
      ],
    },
    {
      label: 'Est dans, ou à 3 cases',
      values: [
        'Structure Bleue',
        'Structure Blanche',
        'Structure Verte',
        'Structure Noire',
      ],
    },
  ];

  const players = [
    { symbol: 'α', label: 'Joueur 1', classes: 'bg-player-1 shadow-player-1' },
    { symbol: 'β', label: 'Joueur 2', classes: 'bg-player-2 shadow-player-2' },
    { symbol: 'γ', label: 'Joueur 3', classes: 'bg-player-3 shadow-player-3' },
    { symbol: 'δ', label: 'Joueur 4', classes: 'bg-player-4 shadow-player-4' },
    { symbol: 'ε', label: 'Joueur 5', classes: 'bg-player-5 shadow-player-5' },
  ];

  return (
    <>
      <header className="h-16 w-full fixed top-0 left-0 bg-teal-600 shadow-xl"></header>

      <main className="mt-16">
        <div className="flex snap-x snap-mandatory overflow-auto flex-none flex-row flex-nowrap">
          {players.map((player) => (
            <section
              key={player.symbol}
              className="w-full snap-center flex-none px-4"
            >
              <div className="w-full grid place-items-center p-4">
                <div
                  className={`h-12 w-12 rounded-full text-white grid place-items-center text-2xl border-white border-2 shadow ${player.classes}`}
                >
                  {player.symbol}
                </div>
              </div>
              <div className=" ">
                {clues.map((clue) => (
                  <div key={clue.label}>
                    <div className="bg-stone-100 border-y border-stone-300 text-center text-3xl py-2 mb-2 font-display font-bold ">
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
      </main>
    </>
  );
}

export default App;
