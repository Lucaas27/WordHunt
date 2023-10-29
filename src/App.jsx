import './App.css'
import { BoardStateProvider } from './contexts/BoardStateProvider'
import Board from './components/Board'
import Keyboard from './components/Keyboard'

function App() {
  return (
    <div className='App'>
      <nav>
        <h1>WordHunt</h1>
      </nav>
      <BoardStateProvider>
        <Board />
        <Keyboard />
      </BoardStateProvider>
    </div>
  )
}

export default App
