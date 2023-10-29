import Key from './Key'

function Keyboard() {
  // Create three arrays for each row of the keyboard
  const keysFirstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keysSecondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const keysThirdRow = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']

  return (
    <div className='keyboard'>
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
