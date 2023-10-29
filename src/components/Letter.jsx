import { useContext } from 'react'
import { BoardContext } from '../contexts/BoardStateProvider'

function Letter({ letterPos, attemptNo }) {
  // Uses useContext with BoardContext to access the board state
  const { board } = useContext(BoardContext)
  // Gets the letter from the board using attemptNo and letterPos
  const letter = board[attemptNo][letterPos]
  return <div className='letter'>{letter}</div>
}

export default Letter
