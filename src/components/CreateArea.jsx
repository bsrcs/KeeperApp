import React, { useState } from "react";

function CreateArea(props) {
  const [inputTitle, setTitle] = useState("");
  const [inputText, setText] = useState("");

  function handleChange(event) {
    const name = event.target.name;
    const newValue = event.target.value;

    if (name === "title") {
      setTitle(newValue);
    }
    else if (name === "content") {
      setText(newValue);
    }
  }
  
  return (
    <div>
      <form onSubmit={(event) => {
        props.onAdd(inputTitle, inputText);
        // prevent refreshing the page after submitting 
        event.preventDefault();
        // set Title & Text to blank
        setTitle("");
        setText("");
      }} >
        <input onChange={handleChange} name="title" placeholder="Title" value={inputTitle} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={inputText} rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;