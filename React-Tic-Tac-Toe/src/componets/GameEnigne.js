/*
All game logic is encapsulated in a data-only class
 */
class GameEngine {

  constructor() {
    this.newGame();
    this._observer = null;
  }

  newGame() {
    this._history = [{ squares: Array(9).fill(null) }];
    this._xIsNext = true;
    this._stepNumber = 0;
    if (this._observer) {
      this._observer.reRender();
    }
  }

  setObserver(observer) {
    this._observer = observer;
  }

  get history() {
    return this._history;
  }

  get xIsNext() {
    return this._xIsNext;
  }

  get stepNumber() {
    return this._stepNumber;
  }

  get current() {
    return this._history[this._stepNumber];
  }

  handleMove(i) {
    var history = this._history.slice(0, this._stepNumber + 1);
    var current = this.history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this._xIsNext ? 'X' : 'O';
    this._history = history.concat([{ squares: squares }]);
    this._stepNumber = history.length,
      this._xIsNext = !this._xIsNext;
    //TODO NOTIFY
    this._observer.reRender();
  }

  jumpTo(step) {
    this._stepNumber = step;
    _xIsNext: (step % 2) ? false : true;
    this._observer.reRender();
  }

  getStatus() {
    const current = this._history[this._stepNumber];
    const winner = this.calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = 'Next player: ' + (this._xIsNext ? "X" : "Y");
    }
    return status;
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

}

export default GameEngine