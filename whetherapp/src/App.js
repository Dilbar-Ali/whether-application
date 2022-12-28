import React ,{useState} from 'react';

import './App.css';
const Api = {
  key: "4273a463cf2b73d7c670769bfd776c45",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${Api.base}weather?q=${query}&units=metric&APPID=${Api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }


  return (
    <div className={ (typeof weather!="undefined")? (weather.main.temp >16 ? 'App Warm': 'App') :'App'}>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}/>
   
</div>
</main>
    </div>
  );
}

export default App;
