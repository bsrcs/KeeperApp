import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputTitle, inputText) {
    //create a note object
    var noteData = {
      "id":new Date().getTime(),
      "title": inputTitle,
      "description": inputText
    };
    //update the items array with new note object
    setItems(prevItems => {
      return [...prevItems, noteData];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        console.log("item: "+ JSON.stringify(item));
        console.log("index: "+index);
        return id !== item.id;
      });
    });
  } 

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((todoItem, index) => (
        <Note
          key={index}
          id={todoItem.id}
          title={todoItem.title}
          content={todoItem.description}
          onDelete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;