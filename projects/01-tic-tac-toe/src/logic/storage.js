import { CLEAN_BOARD, STORAGE, TURNS } from "../utils/constants";

export const saveGame = (board, turn, winner) => {
    window.localStorage.setItem(STORAGE.board, JSON.stringify(board));
    window.localStorage.setItem(STORAGE.turn, turn);
    window.localStorage.setItem(STORAGE.winner, JSON.stringify(winner));
}

export const clearGameStorage = () => {
    window.localStorage.removeItem(STORAGE.board);
    window.localStorage.removeItem(STORAGE.turn);
    window.localStorage.removeItem(STORAGE.winner);
}

export const getStoredBoard = () => {
    const storedBoard = window.localStorage.getItem(STORAGE.board);
    return storedBoard ? JSON.parse(storedBoard) : CLEAN_BOARD;
}

export const getStoredTurn = () => {
    const storedTurn = window.localStorage.getItem(STORAGE.turn);
    return storedTurn ?? TURNS.X;
}

export const getStoredWinner = () => {
    const storedWinner = window.localStorage.getItem(STORAGE.winner);
    return storedWinner ? JSON.parse(storedWinner) : null;
}
