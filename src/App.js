import './App.css';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import WorkExperience from './components/workExperience/WorkExperience';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Navigation />
        <Banner />
        <Skills />
        <Projects />
        <WorkExperience />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
