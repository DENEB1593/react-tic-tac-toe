export default function GameBoard({ onSelectSqure, board }) {
    return (
    <ol id="game-board">
        { board.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((symbol, colIndex) => (
                        <li key={colIndex}>
                            <button 
                                onClick={() => onSelectSqure(rowIndex, colIndex)} 
                                disabled={symbol !== null} >
                                    {symbol}
                            </button>
                        </li>
                    ))
                    }
                </ol>
            </li>
        ))}
    </ol>
    );
}