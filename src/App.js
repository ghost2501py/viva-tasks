import Topbar from './components/Topbar'
import TaskList from './components/TaskList'
import TaskPane from './components/TaskPane'

import './App.css'

function App() {
  return (
    <div id="app">
      <Topbar />
      <main>
        <TaskList />
        <TaskPane />
      </main>
    </div>
  )
}

export default App
