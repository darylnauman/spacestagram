import React, {useState, useEffect} from 'react';
import ImageCardContainer from './components/ImageCardContainer';
import './App.css';

function App() {

  const [apods, setApods] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = () => {
    fetch("https://api.nasa.gov/planetary/apod?count=3&api_key=ErAT25DgRegQM8Gb3QHrGaVGFAi1qzINicHj2xrw")
    .then(response => response.json())
    .then(data => setApods(data))
    .then(()=>setLoading(false))
    .catch(error => console.error(error))
  }

  useEffect(()=> {
    fetchData()
  }, [])

  return (
    <div>
    {loading ? 
      <h2>Loading</h2>
    : 
      <ImageCardContainer apods={apods} />
    }
    </div>
  );
}

export default App;
