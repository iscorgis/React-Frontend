import React from 'react';
import Controls from "./components/Controls.jsx";
import TodosList from "./components/TodosList.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
          <Controls/>
          <TodosList/>
    </div>
  );
}

export default App;
