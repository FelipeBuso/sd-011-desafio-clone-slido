import React from 'react';
import './App.css';
import Questions from './components/Questions';
// import AskQuestion from './components/AskQuestion';

function App() {
  return (
    <div className="App">
      <h1>Desafio Clone do Sli.do</h1>
      {/* <AskQuestion /> */}
      <Questions />
    </div>
  );
}

export default App;
