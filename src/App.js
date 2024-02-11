import './App.css';
import Navbar from './component/Navbar/nav';
import Intro from './component/Intro/intro';
import Skill from './component/skills/skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
    </div>
  );
}

export default App;
