/* 
Initial board state. It's an array of arrays - matrix.
Each array has five empty string as starting value - a word has five letters.
Each string will correspond to a letter
Each array will correspond to an attempt
*/

import { createContext, useState } from 'react'

// Create a react context for board
export const BoardContext = createContext()

export function BoardStateProvider({ children }) {
  // This creates an array with 6 elements, and for each element, it creates a new array with 5 empty strings
  const boardDefault = Array.from({ length: 6 }, () => Array(5).fill(''))
  // Initial guess object
  const intialGuess = { attempt: 0, letterPos: 0 }

  // State to manage board value. It will be passed down to children components
  const [board, setBoard] = useState(boardDefault)
  // State to manage current guess
  const [guess, setGuess] = useState(intialGuess)

  return (
    <BoardContext.Provider value={{ board, setBoard, guess, setGuess }}>
      {children}
    </BoardContext.Provider>
  )
}
