import { createSlice, current } from "@reduxjs/toolkit";



const gameCells = []

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        gameCells.push(
            {
                row: i,
                col: j,
                className: '',
                owner: null
            })
    }
}

const initialState = {
    gameActive: false,
    gameCells,
    winner: null,
    totalTurns: null,
    playerTurn: null,
    players: [
        {
            id: 1,
            name: "Player-1",
        },
        {
            id: 2,
            name: "Player-2",
        },
    ],
}



const nextTurn = (state) => {

    if (state.playerTurn === 0) state.playerTurn = 1
    else state.playerTurn = 0

}

const checkWinner = (playerCells) => {

    const WIN_PATTERNS = [
        // filas
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],

        // columnas
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],

        // diagonales
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
    ];

   return WIN_PATTERNS.some(
        pattern => pattern.every( 
            ( [row, col] ) => playerCells.some(
                cell => cell.row === row && cell.col === col
            )
        )
    )

    // return WIN_PATTERNS.some(pattern =>
    //     pattern.every(([row, col]) =>
    //         playerCells.some(c => c.row === row && c.col === col)
    //     )
    // )




}

const juegoSlice = createSlice({
    name: 'juego',
    initialState,
    reducers: {
        startGame(state) {
            state.gameActive = true
            state.playerTurn = 0
        },
        resetGame() {
            return { ...initialState }
        },

        addCelltoPlayer(state, action) {
            if (state.winner) return

            const { row, col } = action.payload

            state.gameCells.forEach(item => {
                if (item.row === row && item.col === col) {
                    if (item.owner) return

                    item.className = state.players[state.playerTurn].name.toLowerCase()
                    item.owner = state.playerTurn
                }
            })


            if (checkWinner(state.gameCells.filter(cell => cell.owner === state.playerTurn))) {
                state.winner = true
                console.log(current(state));

            }

            nextTurn(state)


        }

    }
})

export const {
    startGame,
    resetGame,
    addCelltoPlayer
} = juegoSlice.actions

export const selectGameActive = state => state.juego.gameActive
export const selectGameCells = state => state.juego.gameCells
export const selectWinner = state => state.juego.winner

// export const selectTurn = state => state.juego.turn
export const selectCurrentPlayer = state => state.juego.players[state.juego.playerTurn]
export const selectAllPlayers = state => state.juego.players


export default juegoSlice.reducer



// Logica:

// 2 jugadores con turnos alternos
// cada casilla en tablero puede haber sido marcada por uno de lo jugadores, o por ninguno
// cuando tres fichas del mismo jugador están alineadas el jugador gana y termina el juego