import { useContext } from 'react'
import { BoardContext } from '../contexts/BoardStateProvider'

function Letter({ letterPos, attemptNo }) {
  // Uses useContext with BoardContext to access the board state
  const { board, guess, correctWord } = useContext(BoardContext)
  // Gets the letter from the board using attemptNo and letterPos
  const letter = board[attemptNo][letterPos]
  // Check if letter guessed is correct by comparing position with the right word
  const correct = letter.toUpperCase() === correctWord[letterPos].toUpperCase()
  // If it is not correct, letter is not empty and correct word includes the letter
  const almost = !correct && letter !== '' && correctWord.includes(letter)

  // Only apply styles after the attempt is submitted
  const letterState =
    guess.attempt > attemptNo &&
    (correct ? 'correct' : almost ? 'almost' : 'error')

  return (
    <div className='letter' id={letterState ? letterState : undefined}>
      {letter}
    </div>
  )
}

export default Letter
