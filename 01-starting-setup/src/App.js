import React, { useState } from 'react';
import './App.css';
import Button from "./components/UI/Button"
function App() {
  const [showParagraph, setShowParagraph] = useState(false)

  const toggleParagraphHandler=()=>{
    setShowParagraph(prevPragraph=>!prevPragraph)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph&&<p>This is here</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
