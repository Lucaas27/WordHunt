import { createContext, useState } from 'react'

/* 
Initial board state. It's an array of arrays - matrix.
Each array has five empty string as starting value - a word has five letters.
Each string will correspond to a letter
Each array will correspond to an attempt
*/

// This creates an array with 6 elements, and for each element, it creates a new array with 5 empty strings
const boardDefault = Array.from({ length: 6 }, () => Array(5).fill(''))

// Create a react context for board
export const BoardContext = createContext()

export function BoardStateProvider({ children }) {
  // State to manage board value. It will be passed down to children components
  const [board, setBoard] = useState(boardDefault)
  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      {children}
    </BoardContext.Provider>
  )
}
