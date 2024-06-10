import { useState } from 'react'
import './App.scss'
import TicTacToe from './Pages/TicTacToe'

function App() {
  return (
    <>
      <div>
        <form>
          <TicTacToe/>
        </form>
      </div>
    </>
  )
}

export default App
