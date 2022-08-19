import React, {useState, useEffect} from "react";
import { FaAngleDoubleRight } from 'react-icons/fa';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs,setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
}

export default App;
