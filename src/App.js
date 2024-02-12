import './App.css';
import Navbar from './component/Navbar/nav';
import Intro from './component/Intro/intro';
import Skill from './component/skills/skills';
import Footer from './component/footer/footer';
import Contact from './component/contact/contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
