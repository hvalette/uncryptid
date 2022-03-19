import { getClues, getPlayers } from '../lib/data'

function App() {
    const clues = getClues()

    const players = getPlayers()

    return (
        <div className="flex flex-none snap-x snap-mandatory flex-row flex-nowrap overflow-auto">
            Bienvenue
        </div>
    )
}

export default App
