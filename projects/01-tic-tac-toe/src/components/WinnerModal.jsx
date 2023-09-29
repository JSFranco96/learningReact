import Square from "./Square";

function WinnerModal({ winner, clearGame }) {
    if (winner === null) return null;

    const winnerText = !winner ? 'Draw' : 'Winner:';

    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>

                {
                    winner &&
                    <header className='win'>
                        <Square>{winner}</Square>
                    </header>
                }

                <footer>
                    <button onClick={clearGame}>Restart ↺</button>
                </footer>
            </div>
        </section>
    )
}

export default WinnerModal;