import TasksStore from "./stores/Tasks";
import TaskList from "./components/TaskList";
import Topbar from "./components/Topbar";

function App() {
  const store = new TasksStore();
  return (
    <div className="App">
      <Topbar store={store} />
      <TaskList store={store} />
    </div>
  );
}

export default App;
