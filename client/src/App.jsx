import './App.css'
import { BoardStateProvider } from './contexts/BoardStateProvider'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { useEffect, useState } from 'react'
import { fetchWord } from './services/randomWords.js'

function App() {
  const [word, setWord] = useState('')
  useEffect(() => {
    try {
      const fetchData = async () => {
        const word = await fetchWord()
        setWord(word)
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(word)

  return (
    <div className='App'>
      <nav>
        <h1>WordHunt</h1>
      </nav>
      <div className='game'>
        <BoardStateProvider word={word}>
          <Board />
          <Keyboard />
        </BoardStateProvider>
      </div>
    </div>
  )
}

export default App
