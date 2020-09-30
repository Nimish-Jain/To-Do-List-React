import React, { useState } from "react";
import TDL from "./TDL";

const App = () => {
  const fff = "Empty task entered...";
  const [inputlist, setinputlist] = useState("");
  const [Items, setItems] = useState([]);

  const itemev = (event) => {
    setinputlist(event.target.value);
  };

  const AddItems = () => {
    setItems((oldItems) => {
      if (inputlist == "") {
        alert("You are entering an empty task!");
        return [...oldItems, fff];
      } else {
        return [...oldItems, inputlist];
      }
    });
    setinputlist("");
  };

  const DeleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>To-Do List</h1>
          <br />
          <input
            type="text"
            value={inputlist}
            placeholder="Add Tasks"
            onChange={itemev}
          />
          <button onClick={AddItems}>+</button>

          <ol>
            {Items.map((itemval, index) => {
              return (
                <TDL
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={DeleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
