import React from 'react';
import './App.css';
import { Testfile } from './components/Testfile';

function fetchData() {
  fetch("http://localhost:8080/plans")
  .then(response => {
    if(response.ok) {
      return response.json()
    }
    throw response;
  })
  .then(data => {
    setData(data);
  })
  .catch()
}

function App() {
  return (
    <p>
      <Testfile />
    </p>
  );
}

export default App;
