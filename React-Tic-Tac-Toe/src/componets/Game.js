import {Component} from 'react'
import './../css/board.css'

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Board extends Component {

  renderSquare(i) {
    return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
  }

  render() {
    var rows = Array(3).fill(null);
    var id = 0;
    rows.map(() => {
      let children = [];
      for (var j = 0; j < 3; j++) {
        children.push(this.renderSquare(id++));
      }
      rows.push(<div key={id}>{children}</div>)
    })
    return (
      <div>
        {rows}
      </div>
    );
  }
}

class Game extends Component {

  constructor(props) {
    super(props);
    this.props.gameEngine.setObserver(this);
  }

  reRender() {
    this.forceUpdate();
  }

  render() {
    const engine = this.props.gameEngine;
    const status = engine.getStatus();

    const moves = engine.history.map((step, move) => {
      const desc = move ? "Move # " + move : "Game start";
      return (
        <li key={move}>
          <a href="#" onClick={() => engine.jumpTo(move)}>{desc}</a>
        </li>
      )
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={engine.current.squares} onClick={(i) => engine.handleMove(i)} />
        </div>
        <div className="game-info">
          <button className="btn"
                  onClick={()=>engine.newGame()}>New game</button>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


export default Game