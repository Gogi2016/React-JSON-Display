import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://arthurfrost.qflo.co.za/php/getTimeline.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Timeline</h1>
      {data.map(item => (
        <div key={item.id} className="timeline-item">
          <h2>{item.title}</h2>
          <img src={`https://arthurfrost.qflo.co.za/Images/${item.image}`} alt={item.title} />
          <p>{item.description}</p>
          <audio controls>
            <source src={`https://arthurfrost.qflo.co.za/MP3/${item.audio}`} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </div>
  );
};

export default App;
