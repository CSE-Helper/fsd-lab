//App.js
import React, { useState } from 'react';

const initialBoard = Array(9).fill(null);

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    setBoard(updatedBoard);

    checkWinner(updatedBoard);

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue === '') return;

    const index = parseInt(inputValue, 10) - 1;
    if (isNaN(index) || index < 0 || index >= 9 || board[index]) {
      setInputValue('');
      return;
    }

    handleCellClick(index);
    setInputValue('');
  };

  const checkWinner = (board) => {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        break;
      }
    }

    if (!board.includes(null) && !winner) {
      setWinner('Draw');
    }
  };

  const handleRestart = () => {
    setBoard(initialBoard);
    setCurrentPlayer('X');
    setWinner(null);
  };

  const renderCell = (index) => {
    return (
      <div
        className="cell"
        onClick={() => handleCellClick(index)}
      >
        {board[index]}
      </div>
    );
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((_, index) => (
          <React.Fragment key={index}>
            {renderCell(index)}
            {(index + 1) % 3 === 0 && <br />}
          </React.Fragment>
        ))}
      </div>
      <div className="status">
        {winner ? (
          <div>
            {winner === 'Draw' ? 'It\'s a draw!' : `Player ${winner} wins!`}
            <button onClick={handleRestart}>Restart</button>
          </div>
        ) : (
          <div>
            <form onSubmit={handleFormSubmit}>
              <label>
                Enter move (1-9):
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Make Move</button>
            </form>
            Current player: {currentPlayer}
          </div>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
