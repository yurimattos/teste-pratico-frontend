import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import PostList from "./PostList";

function Searchbar() {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <Form.Control
        type="text"
        id="searh"
        aria-describedby="search"
        onChange={inputHandler}
      />
      <PostList inputText={inputText} />
    </>
  );
}

export default Searchbar;
