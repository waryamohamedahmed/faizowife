import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {



  const [fetch, setFetch] = useState([]);

  useEffect(() => {
    // hit an API
    axios
    .get('http://localhost:4000/')
    .then(res => {
      setFetch(res.data)
    })
    .catch(err =>{
      console.log('Error from ShowBookList');
    })
  }, [])

  return (
    <div className="App">

      <div class="main" id="demo" data-lining>

        <h1>Faizo iyo Maxamed Forever</h1>
        {fetch.map((i) =>
          <div key={i}>
            <h2>{i.nameofallah}</h2>
            <h3>{i.dua}</h3>
            <h4>{i.text}</h4>
          </div>
        )}
      </div>
      <div class="footer">
        Faizo Iftiin Mohamed <span id="heart">LOVE</span>
        <a href="https://twitter.com/zhoumm" target="_blank"></a>
        Mohamed Abdisalam Ahmed
      </div>
    </div>
  );
}

export default App;
