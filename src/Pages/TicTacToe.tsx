import { useState } from 'react'
import './TicTacToe.scss'
import GameState from '../Types/GameState';
import TicTacToeSlot from '../Components/TicTacToeSlot';

function CheckForEndgame(state: number[][]): number{
    function vertical(col: number): number{
        return state[0][col] !== 0 && state[0][col] === state[1][col] && state[0][col] === state[2][col] ? state[0][col] : 0;
    }
    function horizontal(row: number): number{
        return state[row][0] != 0 && state[row][0] == state[row][1] && state[row][0] == state[row][2] ? state[row][0] : 0;
    }
    function diagonalLeft(): number{
        return state[0][0] != 0 && state[0][0] == state[1][1] && state[0][0] == state[2][2] ? state[0][0] : 0; 
    }
    function diagonalRight(): number{
        return state[0][2] != 0 && state[0][2] == state[1][1] && state[0][0] == state[2][0] ? state[0][2] : 0; 
    }

    return vertical(0) || vertical(1) || vertical(2) || horizontal(0) || horizontal(1) || horizontal(2) || diagonalLeft() || diagonalRight();
}

function TicTacToe(){
  const [state, setState] = useState<GameState>(new GameState());

  return (
    <>
      <div className="tictactoe tictactoe-row">
        <TicTacToeSlot row={0} col={0} game={state}/>
        <TicTacToeSlot row={0} col={1} game={state}/>
        <TicTacToeSlot row={0} col={2} game={state}/>
      </div>
      <div className="tictactoe tictactoe-row">
        <TicTacToeSlot row={1} col={0} game={state}/>
        <TicTacToeSlot row={1} col={1} game={state}/>
        <TicTacToeSlot row={1} col={2} game={state}/>
      </div>
      <div className="tictactoe tictactoe-row">
        <TicTacToeSlot row={2} col={0} game={state}/>
        <TicTacToeSlot row={2} col={1} game={state}/>
        <TicTacToeSlot row={2} col={2} game={state}/>
      </div>
    </>
  )
}


export default TicTacToe