import {useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar/nav';
import Footer from './component/footer/footer';
import ClipLoader from "react-spinners/GridLoader";
import HomePage from './pages/home';
import Resume from './pages/resume';

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
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/resume' element={<Resume/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      }

    </div>
  );
}

export default App;
