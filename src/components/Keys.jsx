function Keys({ keyVal }) {
  return (
    <div
      className={keyVal === 'ENTER' || keyVal === 'DELETE' ? 'big-key' : 'key'}
    >
      {keyVal}
    </div>
  )
}

export default Keys
