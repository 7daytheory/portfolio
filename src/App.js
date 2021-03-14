import './App.css';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
