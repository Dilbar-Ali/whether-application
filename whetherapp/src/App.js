import React ,{useState} from 'react';

import './App.css';
const Api = {
  key: "4273a463cf2b73d7c670769bfd776c45",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  const [query, setQuery] = useState('');
  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
