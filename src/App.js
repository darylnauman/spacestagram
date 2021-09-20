import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  
  const fetchData = () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=ErAT25DgRegQM8Gb3QHrGaVGFAi1qzINicHj2xrw")
    .then(response => response.json())
    // .then((data) => console.log(data.title))
    .then(setData)
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
      <Card title={data.title} url={data.url} />
    }
    </div>
  );
}

export default App;
