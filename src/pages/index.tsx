import Clue from '../components/Clue';
import { registerSW } from 'virtual:pwa-register';
import { getClues, getPlayers } from '../lib/data';

function App() {
  registerSW({ immediate: true });

  const clues = getClues();

  const players = getPlayers();

  return (
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
  );
}

export default App;
