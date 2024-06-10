import { useState } from 'react'
import './TicTacToeSlot.scss'
import GameState from '../Types/GameState';

function TicTacToeSlot({ row, col, game: state }: { row:number, col:number, game:GameState }){
  const [ value, setValue ] = useState(0);
  const [ disabled, setDisabled ] = useState(false);

  function handleClick(){
    setValue(state.PerformMove(row, col));
    setDisabled(true);
  }

  return (
    <>
      <button 
        className="tictactoe-slot tictactoe" 
        onClick={handleClick}
        disabled={disabled}
        >
          {value}
        </button>
    </>
  )
}


export default TicTacToeSlot;