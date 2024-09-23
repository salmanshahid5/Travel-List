import { useState } from "react";
import "./App.css";
function App() {
  const [itemList, setItemList] = useState([]);
  return (
    <div
      className="App"
      style={{
        height: "100vh",
      }}
    >
      <Logo />
      <Form itemList={itemList} setItemList={setItemList} />
      <PackingList itemList={itemList} setItemList={setItemList} />
      <Stats itemList={itemList} />
    </div>
  );
}
export default App;

// logo section

function Logo() {
  return <h1 className="logo">🌳 Far Away 👜</h1>;
}

// form section

function Form(props) {
  const { itemList, setItemList } = props || {};
  // input state
  const [inputText, SetInputText] = useState("");
  // dropdown state
  const [itemNumber, SetItemNumber] = useState(1);

  // Add btn

  function addHandler() {
    const mylist = [...itemList];
    mylist.push({
      name: inputText,
      number: itemNumber,
    });
    setItemList(mylist);
    SetInputText("");
    SetItemNumber(1);
  }
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip</h3>
      <select
        value={itemNumber}
        onChange={(e) => SetItemNumber(Number(e.target.value))}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => (
          <option key={elem}>{elem}</option>
        ))}
      </select>
      <input
        onChange={(e) => SetInputText(e.target.value)}
        id="add"
        placeholder="Item Name"
        value={inputText}
      ></input>
      <button className="add-btn" onClick={addHandler}>
        Add
      </button>
    </div>
  );
}

// packing list

function PackingList(props) {
  const { itemList, setItemList } = props || {};
  const [isChecked, setIsChecked] = useState(false);
  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function handleCancel(index) {
    const updatedList = itemList.filter((_, idx) => idx !== index);
    setItemList(updatedList);
  }

  return (
    <div className="PackingList">
      {itemList.map((item, index) => (
        <div className="list" key={index}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => handleCheck}
          />
          <p
            style={{
              textDecoration: item.packed ? "line-through" : "none",
              color: item.packed ? "gray" : "white",
            }}
          >
            {item.number} {item.name}
          </p>
          <button className="cancel" onClick={() => handleCancel(index)}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

// footer section

function Stats({ itemList }) {
  return (
    <footer>
      <em className="Stats">
        You have {itemList.length} itmes on your list and you already packed X
        (%)
      </em>
    </footer>
  );
}
