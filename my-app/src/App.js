import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let dinners = ["Fiskekaker", "Wok", "Fiskegrateng", "Potetball", "Taco", "Graut", "Kjøtkaker"];
    let days = ["Måndag", "Tysdag", "Onsdag", "Torsdag", "Fredag", "Laurdag", "Sundag"];
  return (
    <div className="App">
      <header className="App-header">
          <ul>
              {days.map(day => {
                  return (
              <li>
                  <span className="day">{day}</span>
                  <span className="title">{dinners[Math.floor(Math.random() * (dinners.length))]}</span>
              </li>);
              })}
          </ul>
      </header>
    </div>
  );
}

export default App;
