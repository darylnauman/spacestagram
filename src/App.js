import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageCardContainer from './components/ImageCardContainer';
import './App.css';

function App() {

  const [apods, setApods] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  const fetchData = () => {
    fetch(`https://api.nasa.gov/planetary/apod?count=6&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
    .then(response => response.json())
    .then(data => setApods(data))
    .then(()=>setLoading(false))
    .catch(error => console.error(error))
  }

  useEffect(()=> {
    fetchData()
  }, [])

  return (
    <>
      <Header />
      {loading ? 
        <h1 style={{textAlign: "center", marginTop: "2rem"}}>Getting ready for launch! 🚀</h1>
      : (
        <>
          <ImageCardContainer apods={apods} />
          <Footer />
        </>
        )
      }
    </>
  );
}

export default App;
