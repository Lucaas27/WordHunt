import { useEffect, useCallback, useContext } from 'react'
import Key from './Key'
import { BoardContext } from '../contexts/BoardStateProvider'

function Keyboard() {
  // Create three arrays for each row of the keyboard
  const keysFirstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keysSecondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const keysThirdRow = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']

  const { board, onDelete, onEnter, onSelectLetter } = useContext(BoardContext)

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        onEnter()
      } else if (event.key === 'Backspace' || event.key === 'Delete') {
        onDelete()
      } else {
        // Create an array containing all keys, excluding 'ENTER' and 'DELETE'
        const keys = [
          ...keysFirstRow,
          ...keysSecondRow,
          ...keysThirdRow.filter((key) => key !== 'ENTER' && key !== 'DELETE'),
        ]

        /* 
      Check if array includes the letter being pressed.
      If it does, call onSelectLetter with the value being keyed.
      */
        keys.includes(event.key.toUpperCase()) &&
          onSelectLetter(event.key.toUpperCase())
      }
    },
    [board]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div className='keyboard' onKeyDown={handleKeyDown}>
      <div className='first-row'>
        {keysFirstRow.map((key, index) => (
          <Key keyVal={key} key={index} />
        ))}
      </div>
      <div className='second-row'>
        {keysSecondRow.map((key, index) => (
          <Key keyVal={key} key={index} />
        ))}
      </div>
      <div className='third-row'>
        {keysThirdRow.map((key, index) => (
          <Key keyVal={key} key={index} bigKey />
        ))}
      </div>
    </div>
  )
}

export default Keyboard
