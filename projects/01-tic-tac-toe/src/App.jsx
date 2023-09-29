import { useState } from 'react';
import './App.css'
import Board from './components/Board';
import WinnerModal from './components/WinnerModal';
import Turn from './components/Turn';
import confetti from 'canvas-confetti';
import { TURNS } from './utils/constants';
import { assingTurn, checkEndGame, checkWinner } from './logic/board';


const cleanBoard = Array(9).fill(null);

function App() {

  //#region States
  const [board, setBoard] = useState(cleanBoard)

  const [turn, setTurn] = useState(TURNS.X);

  // null es sin ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);
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
    const newTurn = assingTurn;
    setTurn(newTurn);

    // Revisar si hay un ganador:
    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const clearGame = () => {
    setBoard(cleanBoard);
    setWinner(null);
    setTurn(TURNS.X)
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
