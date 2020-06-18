import React, { useState } from 'react';




const api={
    key:'4836a8b1c7c5cf607b31579c40cc3e15',
    base: "https://api.openweathermap.org/data/2.5/"

  }


function App() {
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({});

  const search=evt=>{
    if (evt.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result=>{
        setWeather(result);
        setQuery('');
        console.log(result);
        
      });
    }

  }
  
  const dateBuilder=(d)=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 20) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input 
          type="text"
          className="search-bar"
          placeholder="search"
          onChange={e=>setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
          <p className="hint">city/state/country</p>
        </div>
        
        {(typeof weather.main!="undefined")?(
          <div>
            <div className="location-box">
          <div className="location">{weather.name} , {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
          {Math.round(weather.main.temp)}°C
          </div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
          </div>
        ):('')}
        
        <p className="logo">MyWeatherApp</p>
        <p className="mail">debaprasadpaul033@gmail.com</p>
        <img className="imgani" src="https://digitalsynopsis.com/wp-content/uploads/2015/10/gif-icons-menu-transition-animations-weather.gif" alt=""/>
      </main>
    </div>
  );
}

export default App;
