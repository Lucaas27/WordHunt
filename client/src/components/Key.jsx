import { useContext } from 'react'
import { BoardContext } from '../contexts/BoardStateProvider'

function Key({ keyVal }) {
  // Use useContext with BoardContext to access functions used to modify states
  const { onDelete, onEnter, onSelectLetter } = useContext(BoardContext)

  const selectLetterHandler = () => {
    if (keyVal === 'ENTER') {
      onEnter()
    } else if (keyVal === 'DELETE') {
      onDelete()
    } else {
      onSelectLetter(keyVal)
    }
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
