import Letter from './Letter'


function Board() {
  /*
  Create new arrays with a length of 5 and 6. 
  For each element in the array, it assigns the value of attemptNo/letterPos to that element.
  AttemptNo/letterPos represent the index of the element in the array. 
  */
  const attempts = Array.from({ length: 6 }, (_, attemptNo) => attemptNo); // Six attempts to guess the word
  const letters = Array.from({ length: 5 }, (_, letterPos) => letterPos); // 5 letter word
  return (
    <div className="board">

      {
        //  loop to generate the components dynamically.
        attempts.map(attemptNo => (
          <div className="row" key={attemptNo}>
            {
              letters.map(letterPos => (
                <Letter letterPos={letterPos} attemptNo={attemptNo} key={letterPos} />
              )
              )
            }
          </div>

        ))
      }
    </div>
  )
}

export default Board