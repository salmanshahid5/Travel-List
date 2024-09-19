import { useState } from "react";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
export default App;

// logo section

function Logo() {
  return <h1 className="logo">🌳 Far Away 👜</h1>;
}

// form section

function Form() {

  const [inputText,SetInputText] = useState('')
  const [itemNumber,SetItemNumber] = useState(1)

  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip</h3>
      <select value={itemNumber} onChange={(e) => SetItemNumber(Number(e.target.value))}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => (
          <option key={elem}>{elem}</option>
        ))}
      </select>
      <input onChange={(e)=> SetInputText(e.target.value)} id="add" placeholder="Item Name" value={inputText}></input>
      <button className="add-btn">Add</button>
    </div>
  );
}


