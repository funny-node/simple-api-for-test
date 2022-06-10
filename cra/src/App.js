import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:9999/').then(res => res.json()).then(res => {
      console.log(res);
    })
  }, [])

  return (
    <div className="App-container">
      <p>hello world</p>
    </div>
  );
}

export default App;
