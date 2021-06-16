import './App.css';
import ToysContainer from './ToysContainer'
import Search from './Search'
import {useState} from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  function handleChange(event){
    setSearchTerm(event.target.value) 
    //update state to be what we passed in as an argument
  }

  return (
    <div className="App">
      <h1>React Toy Tale</h1>
      <Search handleChange={handleChange}/>
      <ToysContainer searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
