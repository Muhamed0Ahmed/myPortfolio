import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
