export function getClues(advanced: boolean) {
    return [
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
                ...(advanced ? ['Structure Noire'] : []),
            ],
        },
    ]
}

export function getPlayers() {
    return [
        {
            symbol: 'α',
            label: 'Joueur 1',
            classes: 'bg-player-1 shadow-player-1',
        },
        {
            symbol: 'β',
            label: 'Joueur 2',
            classes: 'bg-player-2 shadow-player-2',
        },
        {
            symbol: 'γ',
            label: 'Joueur 3',
            classes: 'bg-player-3 shadow-player-3',
        },
        {
            symbol: 'δ',
            label: 'Joueur 4',
            classes: 'bg-player-4 shadow-player-4',
        },
        {
            symbol: 'ε',
            label: 'Joueur 5',
            classes: 'bg-player-5 shadow-player-5',
        },
    ]
}
