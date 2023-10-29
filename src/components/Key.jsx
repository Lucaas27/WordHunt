import { useContext } from 'react'
import { BoardContext } from '../contexts/BoardStateProvider'
import cloneDeep from 'lodash/cloneDeep'

function Key({ keyVal }) {
  const { board, setBoard } = useContext(BoardContext)

  const selectLetterHandler = () => {
    /* 
    Use Lodash to create a new deep copy of the board matrix.
    We cannot change states directly in react.
    The spread operator technique would not work here i.e. [...board]
    Because elements of the board array are other arrays.
    It would create new references to the same arrays,
    meaning changes to those arrays within the new array will still affect the original array.
    */
    const newBoard = cloneDeep(board)
    newBoard[0][0] = keyVal
    setBoard(newBoard)
  }

  return (
    <div
      className={keyVal === 'ENTER' || keyVal === 'DELETE' ? 'big-key' : 'key'}
      onClick={selectLetterHandler}
    >
      {keyVal}
    </div>
  )
}

export default Key
