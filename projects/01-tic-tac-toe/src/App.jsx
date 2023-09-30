import { useState } from 'react';
import './App.css'
import Board from './components/Board';
import WinnerModal from './components/WinnerModal';
import Turn from './components/Turn';
import confetti from 'canvas-confetti';
import { TURNS, STORAGE, CLEAN_BOARD } from './utils/constants';
import { assingTurn, checkEndGame, checkWinner } from './logic/board';
import { clearGameStorage, getStoredBoard, getStoredTurn, getStoredWinner, saveGame } from './logic/storage';

function App() {

  //#region States
  const [board, setBoard] = useState(getStoredBoard())

  const [turn, setTurn] = useState(getStoredTurn());

  // null es sin ganador, false es que hay un empate
  const [winner, setWinner] = useState(() => {
    const storedWinner = getStoredWinner();
    if (storedWinner) {
      confetti();
    }

    return storedWinner;
  });
  //#endregion

  //#region Logic
  const updateBoard = (index) => {
    // Validamos que el square no esté lleno
    if (board[index] || winner) return;
    // Tener en cuenta no mutar las props ni los states
    // Por eso, hacemos una copia del array;
    const newBoard = [...board];
    newBoard[index] = turn;
    // Actualizamos el board
    setBoard(newBoard);

    // Cambiamos el turno:
    const newTurn = assingTurn(turn);
    setTurn(newTurn);

    // Guardamos la partida en el localStorage:
    
    // Revisar si hay un ganador:
    const newWinner = checkWinner(newBoard);
    
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }

    saveGame(newBoard, newTurn, newWinner);
  }

  const clearGame = () => {
    setBoard(CLEAN_BOARD);
    setWinner(null);
    setTurn(TURNS.X)
    clearGameStorage();
  }
  //#endregion

  //#region Render
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={clearGame}>Restart ↺</button>

      <Board board={board} updateBoard={updateBoard} />

      <Turn turn={turn} />

      <WinnerModal clearGame={clearGame} winner={winner}></WinnerModal>

    </main>
  )

  //#endregion

}

export default App
