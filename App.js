import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {


const [text ,settext] = useState(" ")
const [list ,setlist] = useState([])



function add(){
   list.push(text)
    setlist([...list])
  }


let deleteitem = (id) => {
 const update = list.filter((val,ind) => {
  return ind != id
 })
 setlist(update)
}

let edited = (id) => {
  const edited = list.find((val,indx) =>{
    if(indx == id){
     return console.log("yes")
    
    }
    
  })
  
  setlist(edited)
}



  return (
    <div className="App">
      <header className="App-header">

        <input onChange={(val) => {
          settext (val.target.value);
          console.log(text)
        }}></input>
        <button onClick={add}>ADD</button>

        <ul>{list.map((e,i) => {
          return <li>{e}
           <button onClick={() => edited(i)}>edit</button>
           <button onClick={() => deleteitem(i)}>delete</button>
       
          </li>
          })}</ul>
        
      </header>
        
    </div>
  );
}

export default App;
