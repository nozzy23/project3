import React from 'react';
import logo from './logo.svg';
import Title from "./component/header/Header.js"
import Favlist from "./component/dropdown/list.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Title/>
    <Favlist/>
      </header>
    </div>
  );
}

export default App;
