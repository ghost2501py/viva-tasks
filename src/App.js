/*import TaskList from "./components/TaskList";
import Topbar from "./components/Topbar";
import TaskPane from "./components/TaskPane";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div>
        <TaskList />
        <TaskPane />
      </div>
    </div>
  );
}
*/
import { observer } from 'mobx-react';

import Topbar from "./components/Topbar";
import TaskList from "./components/TaskList";
import TaskPane from "./components/TaskPane";

function App() {
  return (
    <div className="App">
      <Topbar />
      <TaskList />
      <TaskPane />
    </div>
  );
}

export default observer(App);
