
import { useState } from 'react';
import './App.css';

function App() {

  const[ newString, setNewString ]= useState('');
  const[isDone, setIsDone] = useState(false);

  const[strings, setStrings] = useState([
    {value: 'Study', id: 1, isDone: false},
    {value: 'Work', id: 2, isDone: true},
    {value: 'Sleep', id: 3, isDone: true}]);
  
  function add() {

   // newString ? newString : alert('insert a value')
  
    const string ={
      value: newString,
      id: Math.floor(Math.random()*100)
    }
    console.log(isDone);

    setStrings(pastString => [...pastString, string]);

    setNewString('');
  }

  const done = index => {
    const newToggleDone = [...strings];
    newToggleDone[index].isDone =!newToggleDone[index].isDone
    setIsDone(newToggleDone)
  }


  function explode(id) {

    const newContenitor = strings.filter(string => string.id !== id);
    setStrings(newContenitor);
  }

  
  return (

  
  
    <div className="App">

      <h1>Todo List App</h1>

      <input className='insert' type='text' 
      placeholder='Insert something to do...'
      value={newString}
      onChange={e => setNewString(e.target.value)}
      />

      <button className='btn_Plus' onClick={()=> add()}>+</button>

      <ul>
        {strings.map((string, index) =>{
          return(
            <li key={string.id}><span onClick={() => done(index)} className={string.isDone ? "todo done" : "todo undone"}>{string.value}</span>
            
          <button className='btn_string' 
          onClick={() => explode(string.id)}>🧨</button></li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
