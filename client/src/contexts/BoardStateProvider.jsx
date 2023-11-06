/* 
Initial board state. It's an array of arrays - matrix.
Each array has five empty string as starting value - a word has five letters.
Each string will correspond to a letter
Each array will correspond to an attempt
*/

import { createContext, useState } from 'react'
import cloneDeep from 'lodash/cloneDeep'
import { checkDictionary } from '../services/dictionaryCheck'

// Create a react context for board
export const BoardContext = createContext()

export function BoardStateProvider({ children, word }) {
  // This creates an array with 6 elements, and for each element, it creates a new array with 5 empty strings
  const boardDefault = Array.from({ length: 6 }, () => Array(5).fill(''))
  // Initial guess object
  const intialGuess = { attempt: 0, letterPos: 0 }

  // State to manage board value. It will be passed down to children components
  const [board, setBoard] = useState(boardDefault)
  // State to manage current guess
  const [guess, setGuess] = useState(intialGuess)
  /* 
  Use Lodash to create a new deep copy of the board matrix.
  We cannot change states directly in react.
  The spread operator technique would not work here i.e. [...board]
  Because elements of the board array are other arrays.
  It would create new references to the same arrays,
  meaning changes to those arrays within the new array will still affect the original array.
  */
  const onSelectLetter = (keyVal) => {
    if (guess.letterPos > 4) return
    const newBoard = cloneDeep(board)
    newBoard[guess.attempt][guess.letterPos] = keyVal
    setBoard(newBoard)
    setGuess({ ...guess, letterPos: guess.letterPos + 1 })
  }

  const onEnter = async () => {
    // Do NOT move vertically if the last letter is not filled
    if (guess.letterPos < 5) return
    // Get the word attempted based on the the currect attempt (row)
    let wordAttempted = board[guess.attempt].join('')

    // Call dictionary API to check word validity.
    const wordCheckResult = async () => {
      const result = await checkDictionary(wordAttempted)
      return result
    }

    // Word is only invalid if it is not in our dictionary and is not the right word
    let isWordInvalid =
      (await wordCheckResult().then((result) =>
        result.InvalidWord ? true : false
      )) && word.toUpperCase() !== wordAttempted.toUpperCase()

    if (!isWordInvalid) {
      console.log('Valid word')
    } else {
      alert(
        `'${wordAttempted.toUpperCase()}' is not a word in our dictionary! Try again!`
      )
      return
    }

    // Move to the next attempt(row) onto the first Letter(column)
    setGuess({ attempt: guess.attempt + 1, letterPos: 0 })
  }

  const onDelete = () => {
    if (guess.letterPos === 0) return
    // Set the letter to be deleted to an empty string in the board
    const newBoard = cloneDeep(board)
    newBoard[guess.attempt][guess.letterPos - 1] = ''
    setBoard(newBoard)
    // Move position back to the deleted letter
    setGuess({ ...guess, letterPos: guess.letterPos - 1 })
  }

  return (
    <BoardContext.Provider
      value={{
        board,
        word,
        setBoard,
        guess,
        setGuess,
        onDelete,
        onEnter,
        onSelectLetter,
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}
