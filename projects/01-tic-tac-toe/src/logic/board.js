import { WINNER_COMBOS, TURNS } from "../utils/constants";

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        console.log(boardToCheck[a], boardToCheck[b], boardToCheck[c]);
        if (boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a];
        }
    }

    // Validamos si ya todos los cuadrados tienen algún valor, lo que significaría un empate:
    if (boardToCheck.every(e => e !== null)) return false;

    // De lo contrario, devolvemos null, que significa que aún no hay ganador pero el juego no ha termiando:
    return null;
}

export const checkEndGame = (boardToCheck) => {
    return !boardToCheck.includes(null)
}

export const assingTurn = (turn) => {
    return turn === TURNS.X ? TURNS.O : TURNS.X
}