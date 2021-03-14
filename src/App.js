import './App.css';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Banner />
        <Skills />
        <Contact />
    </div>
  );
}

export default App;
