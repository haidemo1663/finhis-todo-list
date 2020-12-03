import './App.css';
import Header from "./Component/header/header";
import Todolist from "./Component/body/todolist";

function App() {
  return (
    <div className="App">
      <Header/>
      <Todolist/>
    </div>
  );
}

export default App;
