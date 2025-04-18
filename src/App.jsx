import { useEffect, useState } from 'react'
import Header from './Components/Header'
import TabView from './Components/TabView';
import './App.css'

function App() {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBots(data);//we're saving what we get from the previous fetch to the bots state
        setLoading(false);//set to false after we get the data
      })
      .catch((err) => {
        console.error("Failed to fetch bots:", err);
        setError(err.message);
        setLoading(false);//setting it to false even if we encounter an error
      });
  }, []);//remember the empty array at the end of the useEffect to prevent infinite loop!!!!

  if (loading) return <p>Loading bots...</p>;
  if (error) return <p>Error loading bots: {error}</p>;

  return (
    <div className="App">
    <Header />
    <TabView bots={bots} />
  </div>
  )
}

export default App
