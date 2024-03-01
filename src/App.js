import {useState,useEffect} from 'react';
import './App.css';
import Navbar from './component/Navbar/nav';
import Intro from './component/Intro/intro';
import Skill from './component/skills/skills';
import Footer from './component/footer/footer';
import Contact from './component/contact/contact';
import Portfolio from './component/portfolio/portfolio';
import ClipLoader from "react-spinners/GridLoader";

function App() {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },5000)
  },[])
  return (
    <div className="App">
      {
        loading?
        <div className='loader'>
          <ClipLoader color={"#700000"} loading={loading} size={20} aria-label="Loading Spinner" data-testid="loader"/>
        </div>
        :
        <>
          <Navbar/>
          <Intro/>
          <Skill/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </>
      }

    </div>
  );
}

export default App;
